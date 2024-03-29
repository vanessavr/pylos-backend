-- AlterTable
ALTER TABLE "PreguntaPruebaDiagnostica" ADD COLUMN     "esPreguntaCerrada" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "RespuestaPruebaDiagnostica" ADD COLUMN     "respuesta" TEXT;
