-- CreateTable
CREATE TABLE `AppleProduct` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `version` VARCHAR(191) NOT NULL,
    `hasUpdate` BOOLEAN NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `releaseDate` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AppleProduct_name_key`(`name`),
    UNIQUE INDEX `AppleProduct_releaseDate_key`(`releaseDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
