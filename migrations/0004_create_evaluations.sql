-- One row per submitted attempt of an evaluation that has `recordEvaluation: true`
-- (src/sections/*.tsx). Passed and failed attempts are both recorded.
-- item:    "<sectionId>/<evaluation id>" (e.g. "nivel-2/evaluacion"), same as in the progress table.
-- answers: the attempt as one JSON string, in the order the questions were shown:
--          [{"q":3,"a":["Correcta"],"ok":true}, ...]
--          q = question number in the section's question bank (1 = first),
--          a = the option(s) the user picked, ok = whether it was right.
-- score / total / passed: the overall result.
CREATE TABLE IF NOT EXISTS evaluations (
    id         INTEGER PRIMARY KEY,
    user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    item       TEXT    NOT NULL,
    answers    TEXT    NOT NULL,
    score      INTEGER NOT NULL,
    total      INTEGER NOT NULL,
    passed     INTEGER NOT NULL, -- 1 or 0
    created_at INTEGER NOT NULL  -- unix seconds
);

-- "All attempts by this user" / "this user's attempts at this evaluation" read
-- one index range instead of scanning the table.
CREATE INDEX IF NOT EXISTS evaluations_user_item ON evaluations (user_id, item);
