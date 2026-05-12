-- Table des avis clients
-- À exécuter dans l'éditeur SQL de Supabase (https://supabase.com/dashboard)

CREATE TABLE IF NOT EXISTS avis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les requêtes fréquentes
CREATE INDEX IF NOT EXISTS idx_avis_approved ON avis (approved);
CREATE INDEX IF NOT EXISTS idx_avis_created_at ON avis (created_at DESC);

-- Row Level Security
ALTER TABLE avis ENABLE ROW LEVEL SECURITY;

-- Politique : tout le monde peut lire les avis approuvés
CREATE POLICY "Avis approuvés visibles par tous"
  ON avis FOR SELECT
  USING (approved = true);

-- Politique : tout le monde peut soumettre un avis
CREATE POLICY "Tout le monde peut soumettre un avis"
  ON avis FOR INSERT
  WITH CHECK (true);

-- Les opérations UPDATE et DELETE ne sont accessibles qu'avec la clé service_role
-- (utilisée côté serveur dans /api/admin/avis)
