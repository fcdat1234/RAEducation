use inventorymanagement;
delimiter $$
create trigger AfterProductUpdate
after update on products
for each row
begin
	if (old.quantity <> new.quantity) then
    insert into inventorychanges( productid,oldquantity, newquantity, changeDate) 
    values(new.productId, old.quantity, new.quantity, Now() );
    end if;
end $$
delimiter ;

update products 
set quantity = 283
where productid =1;
update products 
set quantity = 209
where productid =3;

-- BTTH2
delimiter $$ 
create trigger BeforeProductDelete
before delete on products
for each row
begin
	if (old.quantity > 10) then
		signal sqlstate '45000' set message_text = "Không thể xóa sản phẩm có số lượng lớn hơn 10";
	end if;
end $$
delimiter ;

DELETE FROM products WHERE ProductID = 2;

-- BTTH3
delimiter $$
create trigger AfterProductUpdateSetDate
before update on products
for each row
begin
	   SET NEW.LastUpdated = NOW();
end$$
delimiter ;
drop trigger AfterProductUpdateSummary;
update products 
set quantity = 291
where productid =1;

-- BTTH4
-- Thêm bản ghi khởi tạo nếu chưa có
INSERT INTO ProductSummary (ToolQuantity) VALUES (0);

delimiter $$
create trigger AfterProductUpdateSummary
after update on products
for each row
begin
	   DECLARE total INT DEFAULT 0;

    SELECT SUM(quantity)
    INTO total
    FROM products;

    UPDATE productsummary SET ToolQuantity = total;
end$$
delimiter ;

-- BTTH 5
CREATE TABLE inventoryChangeHistory(
	historyID INT PRIMARY KEY AUTO_INCREMENT,
    productID INT,
    FOREIGN KEY(productID) REFERENCES products(productID),
    oldQuantity INT,
    newQuantity INT,
    changeType ENUM('INCREASE', 'DESCREASE'),
    changeDate DATETIME
)

DELIMITER $$
CREATE TRIGGER AfterProductUpdateHistory
AFTER UPDATE 
ON Products
FOR EACH ROW
BEGIN
    DECLARE change_type ENUM('INCREASE', 'DECREASE');
    IF NEW.quantity > OLD.quantity THEN
        SET change_type = 'INCREASE';
    ELSE 
		SET change_type = 'DECREASE';
    END IF;

    INSERT INTO InventoryChangeHistory (productID, oldQuantity, newQuantity, change_Type, ChangeDate)
    VALUES (OLD.ProductID, OLD.Quantity, NEW.Quantity, change_type, NOW());
END $$
DELIMITER ;

