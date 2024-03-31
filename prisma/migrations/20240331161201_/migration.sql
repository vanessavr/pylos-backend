/*
  Warnings:

  - Made the column `preguntaPruebaDiagnosticaId` on table `RespuestaPruebaDiagnostica` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "RespuestaPruebaDiagnostica" DROP CONSTRAINT "RespuestaPruebaDiagnostica_opcionPruebaDiagnosticaId_fkey";

-- DropForeignKey
ALTER TABLE "RespuestaPruebaDiagnostica" DROP CONSTRAINT "RespuestaPruebaDiagnostica_preguntaPruebaDiagnosticaId_fkey";

-- AlterTable
ALTER TABLE "RespuestaPruebaDiagnostica" ALTER COLUMN "opcionPruebaDiagnosticaId" DROP NOT NULL,
ALTER COLUMN "preguntaPruebaDiagnosticaId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "RespuestaPruebaDiagnostica" ADD CONSTRAINT "RespuestaPruebaDiagnostica_opcionPruebaDiagnosticaId_fkey" FOREIGN KEY ("opcionPruebaDiagnosticaId") REFERENCES "OpcionPruebaDiagnostica"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespuestaPruebaDiagnostica" ADD CONSTRAINT "RespuestaPruebaDiagnostica_preguntaPruebaDiagnosticaId_fkey" FOREIGN KEY ("preguntaPruebaDiagnosticaId") REFERENCES "PreguntaPruebaDiagnostica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
