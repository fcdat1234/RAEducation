create database bt2;
use bt2;

create table `host` (
    id int primary key,
    name varchar(45),
    address varchar(45)
);

create table contractor (
    id int primary key,
    name varchar(255),
    address varchar(255),
    contractor varchar(45)
);

create table building (
    id int primary key,
    name varchar(45),
    address varchar(45),
    city varchar(45),
    cost float,
    start date,
    host_id int,
    contractor_id int,
    foreign key (host_id) references host(id),
    foreign key (contractor_id) references contractor(id)
);

create table architect (
    id int primary key,
    name varchar(255),
    sex tinyint(1),
    birthday date,
    place varchar(255),
    address varchar(255)
);

create table design (
    building_id int,
    architect_id int,
    benefit varchar(45),
    primary key (building_id, architect_id),
    foreign key (building_id) references building(id),
    foreign key (architect_id) references architect(id)
);

create table worker (
    id int primary key,
    name varchar(45),
    birthday varchar(45),
    year varchar(45),
    skill varchar(45)
);

create table work (
    building_id int,
    worker_id int,
    date date,
    total varchar(45),
    primary key (building_id, worker_id),
    foreign key (building_id) references building(id),
    foreign key (worker_id) references worker(id)
);
