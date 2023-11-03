DROP TABLE IF EXISTS `cs312-Order`;
DROP TABLE IF EXISTS `cs312-Art`;

-- Create tables

CREATE TABLE `cs312-Art` (
    ArtID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    CompletionDate DATE,
    Width INT,
    Height INT,
    Price DECIMAL(6,2) NOT NULL,
    Description VARCHAR(1024),
    CONSTRAINT Art_PK PRIMARY KEY (ArtID)
);

CREATE TABLE `cs312-Order` (
    ArtID INT NOT NULL,
    CustomerName VARCHAR(255) NOT NULL,
    CustomerNumber VARCHAR(22) NOT NULL,
    CustomerEmail VARCHAR(320) NOT NULL,
    CustomerAddress VARCHAR(255) NOT NULL,
    CONSTRAINT Order_PK PRIMARY KEY (ArtID),
    CONSTRAINT Order_Art_FK FOREIGN KEY (ArtID) REFERENCES `cs312-Art` (ArtID)
);

-- Insert data

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Serene Landscape', '2023-12-15', 360, 240, 250.00, 'A tranquil landscape painting depicting a peaceful countryside scene with rolling hills and a serene lake.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('City Lights', '2024-01-23', 240, 180, 150.00, 'An evocative cityscape capturing the vibrant night lights of a bustling metropolis.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Eternal Gaze', '2024-02-20', 300, 400, 300.00, 'A captivating portrait of a thoughtful gaze.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Abstract Dreams', '2024-01-10', 480, 360, 350.00, 'A bold and vibrant abstract painting that invites viewers to interpret its unique patterns and colors.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Fruit Basket', '2024-04-01', 160, 200, 75.00, 'A delightful still life painting featuring a colorful assortment of fruits.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Coastal Serenity', '2024-03-02', 300, 240, 200.00, 'A calming seascape with waves gently caressing the shore.');

