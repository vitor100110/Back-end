/*
  Warnings:

  - You are about to drop the column `disciplinaID` on the `Professor` table. All the data in the column will be lost.
  - Added the required column `professorID` to the `Disciplina` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Disciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "professorID" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Disciplina_professorID_fkey" FOREIGN KEY ("professorID") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Disciplina" ("createdAt", "id", "nome", "updatedAt") SELECT "createdAt", "id", "nome", "updatedAt" FROM "Disciplina";
DROP TABLE "Disciplina";
ALTER TABLE "new_Disciplina" RENAME TO "Disciplina";
CREATE UNIQUE INDEX "Disciplina_professorID_key" ON "Disciplina"("professorID");
CREATE TABLE "new_Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_Professor" ("createdAt", "departamento", "id", "nome", "updatedAt") SELECT "createdAt", "departamento", "id", "nome", "updatedAt" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
PRAGMA foreign_key_check("Disciplina");
PRAGMA foreign_key_check("Professor");
PRAGMA foreign_keys=ON;
