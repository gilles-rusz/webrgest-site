"use client";

import { useState } from "react";
import { Star, CheckCircle2, XCircle, Trash2, Loader2, Lock } from "lucide-react";

interface Avis {
  id: string;
  name: string;
  company: string | null;
  rating: number;
  message: string;
  approved: boolean;
  created_at: string;
}

export default function AdminAvisPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [avis, setAvis] = useState<Avis[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchAvis = async (token = password) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/avis", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401) {
        setAuthenticated(false);
        return false;
      }

      const data = await res.json();
      if (Array.isArray(data)) {
        setAvis(data);
        setAuthenticated(true);
        return true;
      }

      return false;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetchAvis(password);
  };

  const handleApprove = async (id: string, approved: boolean) => {
    setActionLoading(id);
    try {
      await fetch("/api/admin/avis", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id, approved }),
      });
      await fetchAvis();
    } catch {
      // error
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer définitivement cet avis ?")) return;
    setActionLoading(id);
    try {
      await fetch(`/api/admin/avis?id=${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${password}` },
      });
      await fetchAvis();
    } catch {
      // error
    } finally {
      setActionLoading(null);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-2xl p-8 bg-navy-900/60 border border-navy-700/50 space-y-6"
        >
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/15 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-teal-400" />
            </div>
            <h1 className="text-xl font-bold text-white mb-1">
              Administration des avis
            </h1>
            <p className="text-sm text-slate-400">
              Entrez le mot de passe admin
            </p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            className="w-full px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors"
          >
            Se connecter
          </button>
        </form>
      </div>
    );
  }

  const pending = avis.filter((a) => !a.approved);
  const approved = avis.filter((a) => a.approved);

  return (
    <div className="min-h-screen bg-navy-950 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">
            Gestion des avis
          </h1>
          <span className="text-sm text-slate-400">
            {avis.length} avis au total
          </span>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 text-teal-400 animate-spin mx-auto" />
          </div>
        ) : (
          <>
            {pending.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-semibold text-gold-400 mb-4 flex items-center gap-2">
                  En attente de validation ({pending.length})
                </h2>
                <div className="space-y-4">
                  {pending.map((item) => (
                    <AvisCard
                      key={item.id}
                      item={item}
                      loading={actionLoading === item.id}
                      onApprove={() => handleApprove(item.id, true)}
                      onReject={() => handleApprove(item.id, false)}
                      onDelete={() => handleDelete(item.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2">
                Avis publiés ({approved.length})
              </h2>
              {approved.length === 0 ? (
                <p className="text-slate-400 text-sm">
                  Aucun avis publié pour le moment.
                </p>
              ) : (
                <div className="space-y-4">
                  {approved.map((item) => (
                    <AvisCard
                      key={item.id}
                      item={item}
                      loading={actionLoading === item.id}
                      onApprove={() => handleApprove(item.id, false)}
                      onDelete={() => handleDelete(item.id)}
                      isApproved
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function AvisCard({
  item,
  loading,
  onApprove,
  onReject,
  onDelete,
  isApproved,
}: {
  item: Avis;
  loading: boolean;
  onApprove: () => void;
  onReject?: () => void;
  onDelete: () => void;
  isApproved?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-5 border ${
        isApproved
          ? "bg-navy-900/30 border-teal-500/20"
          : "bg-navy-900/40 border-gold-400/20"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-white">{item.name}</span>
            {item.company && (
              <>
                <span className="text-slate-600">•</span>
                <span className="text-sm text-slate-400">{item.company}</span>
              </>
            )}
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-500">
              {new Date(item.created_at).toLocaleDateString("fr-FR")}
            </span>
          </div>
          <div className="flex gap-0.5 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= item.rating
                    ? "text-gold-400 fill-gold-400"
                    : "text-slate-600"
                }`}
              />
            ))}
          </div>
          <p className="text-slate-300 text-sm">{item.message}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {loading ? (
            <Loader2 className="w-5 h-5 text-teal-400 animate-spin" />
          ) : (
            <>
              {isApproved ? (
                <button
                  onClick={onApprove}
                  title="Retirer de la publication"
                  className="p-2 rounded-lg text-slate-400 hover:text-gold-400 hover:bg-navy-800 transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              ) : (
                <>
                  <button
                    onClick={onApprove}
                    title="Approuver"
                    className="p-2 rounded-lg text-slate-400 hover:text-teal-400 hover:bg-navy-800 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                  {onReject && (
                    <button
                      onClick={onReject}
                      title="Rejeter"
                      className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-navy-800 transition-colors"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  )}
                </>
              )}
              <button
                onClick={onDelete}
                title="Supprimer"
                className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-navy-800 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
