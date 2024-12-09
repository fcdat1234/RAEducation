create database ecommercedb;
use ecommercedb;

create table users (
    id int primary key auto_increment,
    username varchar(50) unique not null,
    passwordhash varchar(255) not null,
    email varchar(100) unique not null
);

create table products (
    id int primary key auto_increment,
    productname varchar(100) not null,
    description text,
    price decimal(10, 2) not null,
    stock int not null
);

create table cart (
    id int primary key auto_increment,
    userid int,
    total int not null,
    foreign key (userid) references users(id)
);

create table cartitems (
    id int primary key auto_increment,
    cartid int,
    productid int,
    quantity int not null,
    foreign key (cartid) references cart(id),
    foreign key (productid) references products(id)
);

