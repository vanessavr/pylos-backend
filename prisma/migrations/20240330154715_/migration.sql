/*
  Warnings:

  - You are about to drop the column `preguntaSeguridadId` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `respuestaSeguridad` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `PreguntaSeguridad` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mascotaId` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mascotaNombre` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreUsuario` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_preguntaSeguridadId_fkey";

-- AlterTable
ALTER TABLE "PreguntaPruebaDiagnostica" ALTER COLUMN "esPreguntaCerrada" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "preguntaSeguridadId",
DROP COLUMN "respuestaSeguridad",
ADD COLUMN     "mascotaId" UUID NOT NULL,
ADD COLUMN     "mascotaNombre" TEXT NOT NULL,
ADD COLUMN     "nombreUsuario" VARCHAR(15) NOT NULL;

-- DropTable
DROP TABLE "PreguntaSeguridad";

-- CreateTable
CREATE TABLE "Mascota" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "mascota" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Mascota_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_mascotaId_fkey" FOREIGN KEY ("mascotaId") REFERENCES "Mascota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
