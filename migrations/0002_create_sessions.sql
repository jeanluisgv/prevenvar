-- Login sessions. The cookie holds a random token; only its SHA-256 hash is
-- stored here, so a leaked copy of this table can't be used to log in.
-- token_hash is the primary key, so checking a session reads exactly one row.
CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT    PRIMARY KEY,
    user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at INTEGER NOT NULL -- unix seconds
) WITHOUT ROWID;

-- Lets login clear one user's expired sessions without scanning the table.
CREATE INDEX IF NOT EXISTS sessions_user_id ON sessions(user_id);
