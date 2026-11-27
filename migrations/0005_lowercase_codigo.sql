-- Codes are case-insensitive: registration now stores them in lowercase
-- (worker/index.ts). This brings the codes saved before that change in line.
-- Only rows that actually change are written.
UPDATE users SET codigo = lower(codigo) WHERE codigo <> lower(codigo);
