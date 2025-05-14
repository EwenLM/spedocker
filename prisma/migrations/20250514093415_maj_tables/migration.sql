/*
  Warnings:

  - You are about to drop the `_CategoryToRealisation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryid` to the `Realisation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Realisation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToRealisation" DROP CONSTRAINT "_CategoryToRealisation_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToRealisation" DROP CONSTRAINT "_CategoryToRealisation_B_fkey";

-- DropIndex
DROP INDEX "Realisation_id_key";

-- AlterTable
ALTER TABLE "Realisation" ADD COLUMN     "categoryid" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CategoryToRealisation";

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL,
    "bio" TEXT,
    "imageId" INTEGER,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "imagePath" TEXT NOT NULL,
    "altText" VARCHAR(255) NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "realisationId" INTEGER,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeamMember_imageId_key" ON "TeamMember"("imageId");

-- AddForeignKey
ALTER TABLE "Realisation" ADD CONSTRAINT "Realisation_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_realisationId_fkey" FOREIGN KEY ("realisationId") REFERENCES "Realisation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
