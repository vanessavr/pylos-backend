-- CreateTable
CREATE TABLE "PreguntaSeguridad" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "pregunta" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PreguntaSeguridad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreguntaPruebaDiagnostica" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "pregunta" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PreguntaPruebaDiagnostica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpcionPruebaDiagnostica" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "opcion" TEXT NOT NULL,
    "esOpcionCorrecta" BOOLEAN NOT NULL,
    "preguntaPruebaDiagnosticaId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "OpcionPruebaDiagnostica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" VARCHAR(60) NOT NULL,
    "edad" INTEGER NOT NULL,
    "grado" VARCHAR(2) NOT NULL,
    "colegio" VARCHAR(60) NOT NULL,
    "preguntaSeguridadId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RespuestaPruebaDiagnostica" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "usuarioId" UUID NOT NULL,
    "opcionPruebaDiagnosticaId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "RespuestaPruebaDiagnostica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OpcionPruebaDiagnostica_preguntaPruebaDiagnosticaId_key" ON "OpcionPruebaDiagnostica"("preguntaPruebaDiagnosticaId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_preguntaSeguridadId_key" ON "Usuario"("preguntaSeguridadId");

-- CreateIndex
CREATE UNIQUE INDEX "RespuestaPruebaDiagnostica_usuarioId_key" ON "RespuestaPruebaDiagnostica"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "RespuestaPruebaDiagnostica_opcionPruebaDiagnosticaId_key" ON "RespuestaPruebaDiagnostica"("opcionPruebaDiagnosticaId");

-- AddForeignKey
ALTER TABLE "OpcionPruebaDiagnostica" ADD CONSTRAINT "OpcionPruebaDiagnostica_preguntaPruebaDiagnosticaId_fkey" FOREIGN KEY ("preguntaPruebaDiagnosticaId") REFERENCES "PreguntaPruebaDiagnostica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_preguntaSeguridadId_fkey" FOREIGN KEY ("preguntaSeguridadId") REFERENCES "PreguntaSeguridad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespuestaPruebaDiagnostica" ADD CONSTRAINT "RespuestaPruebaDiagnostica_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespuestaPruebaDiagnostica" ADD CONSTRAINT "RespuestaPruebaDiagnostica_opcionPruebaDiagnosticaId_fkey" FOREIGN KEY ("opcionPruebaDiagnosticaId") REFERENCES "OpcionPruebaDiagnostica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
