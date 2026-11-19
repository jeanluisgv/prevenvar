-- One row per subsection a user has opened. `item` is "<sectionId>/<subsectionId>",
-- matching the ids in src/sections/*.tsx.
-- started_at: first time the user opened it (starts the wait timer).
-- done_at:    when they pressed "Done" (NULL until then).
-- The primary key (user_id, item) makes "all progress for this user" one index range.
CREATE TABLE IF NOT EXISTS progress (
    user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    item       TEXT    NOT NULL,
    started_at INTEGER NOT NULL, -- unix seconds
    done_at    INTEGER,          -- unix seconds
    PRIMARY KEY (user_id, item)
) WITHOUT ROWID;
