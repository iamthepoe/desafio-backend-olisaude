/*
  Warnings:

  - You are about to drop the column `customerId` on the `health_problems` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_CustomerToHealthProblem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CustomerToHealthProblem_A_fkey" FOREIGN KEY ("A") REFERENCES "customers" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CustomerToHealthProblem_B_fkey" FOREIGN KEY ("B") REFERENCES "health_problems" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_health_problems" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "degree" INTEGER NOT NULL
);
INSERT INTO "new_health_problems" ("degree", "id", "name") SELECT "degree", "id", "name" FROM "health_problems";
DROP TABLE "health_problems";
ALTER TABLE "new_health_problems" RENAME TO "health_problems";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CustomerToHealthProblem_AB_unique" ON "_CustomerToHealthProblem"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomerToHealthProblem_B_index" ON "_CustomerToHealthProblem"("B");
