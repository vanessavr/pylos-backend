-- AlterTable
ALTER TABLE "RespuestaPruebaDiagnostica" ADD COLUMN     "preguntaPruebaDiagnosticaId" UUID;

-- AddForeignKey
ALTER TABLE "RespuestaPruebaDiagnostica" ADD CONSTRAINT "RespuestaPruebaDiagnostica_preguntaPruebaDiagnosticaId_fkey" FOREIGN KEY ("preguntaPruebaDiagnosticaId") REFERENCES "PreguntaPruebaDiagnostica"("id") ON DELETE SET NULL ON UPDATE CASCADE;
