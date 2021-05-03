/*Tạo CSDL*/
CREATE DATABASE webgv CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE webgv;

create table loaidv(
	idloaidv int auto_increment primary key,
    tenloai nvarchar(255) not null,
    gioithieu nvarchar(500) not null,
    camket nvarchar(500),
    kynang nvarchar(500),
    anh nvarchar(500)
) engine = innodb;


create table bangphidv(
	iddv int auto_increment primary key,
    idloaidv int not null,
    tendv nvarchar(255) not null,
    mota nvarchar(500),
    gia float,
    donvitinh nvarchar(255),
    constraint fk_idloaidv foreign key (idloaidv) references loaidv(idloaidv) on update cascade on delete cascade
) engine = innodb;

create table khachhang(
	idkh int auto_increment primary key,
    hoten nvarchar(255) not null,
    sdt varchar(10) not null,
    email varchar(255) not null,
    diachi nvarchar(500),
    constraint ck_sdt check (LENGTH(sdt) = 10)
) engine = innodb;
alter table khachhang modify column email varchar(255) null;
alter table khachhang add column trangthai int;

create table nhanvien(
	idnv int auto_increment primary key,
    hoten nvarchar(255) not null,
    gioitinh nvarchar(10),
    ngaysinh date,
    sdt varchar(10) not null unique,
    cmnd varchar(9) not null,
    luong float,
    hinhanh nvarchar(255),
    constraint ck_nv_sdt check (LENGTH(sdt) = 10),
    constraint ck_nv_cmnd check (LENGTH(cmnd) = 9)
) engine = innodb;
alter table nhanvien modify column luong double;

create table taikhoan(
	idtk int auto_increment primary key,
	sdt varchar(10) not null unique,
    pass nvarchar(255) not null,
    idnv int not null unique,
    quyen nvarchar(255),
    trangthai nvarchar(255),
   constraint fk_tk_manv foreign key (idnv) references nhanvien(idnv) on update cascade on delete cascade,
    constraint fk_tk_sdt foreign key (sdt) references nhanvien(sdt) on update cascade on delete cascade
) engine = innodb;

create table lichhen(
	idlichhen int auto_increment primary key,
    idnv int,
    idkh int,
    ngay date not null,
    gio time not null,
    diachihen nvarchar(500),
    constraint fk_lh_manv foreign key (idnv) references nhanvien(idnv) on update cascade on delete set null
) engine = innodb;
alter table lichhen add column hopdong int;

create table nguoigiupviec(
	idnguoigv int auto_increment primary key,
    hoten nvarchar(255) not null,
    gioitinh nvarchar(10),
    ngaysinh date not null,
    sdt varchar(10) not null,
    cmnd varchar(9) not null,
    quequan nvarchar(500),
    hinhanh nvarchar(500),
    constraint ck_nguoigv_sdt check (LENGTH(sdt) = 10),
    constraint ck_nguoigv_cmnd check (LENGTH(cmnd) = 9)
) engine= innodb;
alter table nguoigiupviec add column del int;
alter table nguoigiupviec add column hopdong int;
alter table nguoigiupviec add column ungtuyen int;
alter table nguoigiupviec add column idloaidv int;
alter table nguoigiupviec add constraint fk_nguoigv_idldv foreign key(idloaidv) references loaidv(idloaidv) on update cascade;
alter table nguoigiupviec modify column cmnd varchar(9) null;
alter table nguoigiupviec drop constraint ck_nguoigv_cmnd;

create table hopdongdkgv(
	idhddk int auto_increment primary key,
    idnv int,
    idnguoigv int,
    suckhoe nvarchar(255),
    ngayky date not null,
    ngayhethan date,
    phantramluong int,
    kinhnghiem nvarchar(255),
    constraint fk_hddk_manv foreign key(idnv) references nhanvien(idnv) on update cascade on delete set null,
	constraint  fk_hddk_mangv foreign key(idnguoigv) references nguoigiupviec(idnguoigv)  on update cascade on delete set null
) engine = innodb;

create table hopdongthuedv(
	idhdthue int auto_increment primary key,
    idkh int,
    idnguoigv int,
    idnv int,
    ngaythue date not null,
    trangthai nvarchar(255),
    constraint fk_hdthue_makh foreign key (idkh) references khachhang(idkh) on update cascade on delete set null,
    constraint fk_hdthue_ngv foreign key (idnguoigv) references nguoigiupviec(idnguoigv) on update cascade on delete set null,
    constraint fk_hdthue_manv foreign key (idnv) references nhanvien(idnv) on update cascade on delete set null
) engine = innodb;
alter table hopdongthuedv drop constraint fk_hdthue_makh;

create table phieuthudv(
	idhdthue int auto_increment,
    iddv int,
    dongia float,
    ngaybatdau date,
    ngayketthuc date,
    giolamviec nvarchar(255),
    diachilam nvarchar(500),
    primary key (idhdthue, iddv),
    constraint fk_phieuthu_mahd foreign key (idhdthue) references hopdongthuedv(idhdthue) on update cascade,
    constraint fk_phieuthu_madv foreign key (iddv) references bangphidv(iddv) on update cascade
) engine = innodb;

create table yeucau(
	idyc int auto_increment primary key,
    hoten nvarchar(255),
    sdt char(10) not null unique,
    diachi nvarchar(500),
    ngaylam date,
    congviec nvarchar(255),
    trangthai nvarchar(255),
    iddv int,
    constraint ck_lh_sdt check (LENGTH(sdt) = 10),
    constraint fk_bangphi_madv foreign key (iddv) references bangphidv(iddv) on update cascade
)engine = innodb;


/*Nhập dữ liệu*/
INSERT INTO loaidv (`tenloai`, `gioithieu`, `camket`, `kynang`, `anh`) VALUES ('Giúp việc nhà', 'Mục tiêu hàng đầu của trung tâm là giúp đỡ những người thân, bà con ở quê có công ăn việc làm ổn định, để kinh tế gia đình bớt khó khăn.', 'Cung cấp người giúp việc đã qua kiểm tra tư cách và kỹ năng, người giúp việc có tư cách đạo đức tốt, thật thà, chăm chỉ, biết việc, có ý thức tốt', 'Đưa người giúp việc đến tận nhà khách hàng nếu chủ nhà không qua trung tâm đón người giúp việc được.', '/image/giupviecnha.png');
INSERT INTO loaidv (`tenloai`, `gioithieu`, `camket`, `kynang`, `anh`) VALUES ('Giúp việc chăm sóc người già', 'Khi sử dụng dịch vụ chăm sóc người già hàng đầu Việt Nam, quý khách hàng sẽ cảm thấy hài lòng bởi người giúp việc có tâm huyết trong công việc, có nhiều kinh nghiệm trong nghề và sự trung thực, nhiệt tình của người giúp việc.', 'Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.', 'Nói chuyện, chăm sóc, tâm sự chia sẻ với người già. Đi chợ, lựa chọn thực phẩm dành cho người cao tuổi, nấu những món ăn người cao tuổi thích.', '/image/chamsocnguoigia.jpg');
INSERT INTO loaidv (`tenloai`, `gioithieu`, `camket`, `kynang`, `anh`) VALUES ('Giúp việc trông trẻ', 'Trẻ em rất nhạy cảm, chúng có thể biết được ai yêu quý mình và ai không qua cảm nhận. Chính vì vậy chỉ những người yêu trẻ mới có thể đáp ứng được tiêu chuẩn của chúng tôi. Vì vậy bạn hoàn toàn yên tâm khi sử dụng dịch vụ giúp việc trông trẻ của chúng tôi.', 'Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.', 'Có những kiến thức cơ bản về trông trẻ như: tắm bé khi mới sinh, cho bé ăn uống theo giờ giấc, không ăn uống linh tinh, không đi rong, người giúp việc hay trò chuyện cùng bé, chơi cùng bé và dạy bé những điều hay.', '/image/chamsoctre.jpg');
INSERT INTO loaidv (`tenloai`, `gioithieu`, `camket`, `kynang`, `anh`) VALUES ('Giúp việc ngày Tết', 'Làm lụng vất vả cả năm, ngày Tết bạn chỉ mong được nghỉ ngơi thoải mái vậy mà việc nhà không cấp phép ngày nghỉ cho bạn.Vậy làm sao để bạn được thảnh thơi và không bị việc Tết “dồn” vào chân tường? Hãy sử dụng dịch vụ giúp việc Tết chắc chắn rằng những bà nội trợ có thể bớt đi một nửa gánh nặng trong những ngày đầu năm.', 'Cung cấp người giúp việc Lý lịch đầy đủ, nhân thân rõ ràng, có giấy xác nhận kiểm tra sức khỏe.', 'Lau dọn nhà cửa, sắp sếp lại đồ đạc. Nấu món ăn ngày tết theo thực đơn chủ nhà. Giúp việc đi chợ mua thực phẩm, nấu cỗ truyền thống ngày tết.', '/image/giupviecngaytet.png');

INSERT INTO bangphidv (`idloaidv`, `tendv`, `mota`, `gia`, `donvitinh`) VALUES ('50', 'Giúp việc nhà ăn ở lại', 'Linh hoạt sắp xếp lịch làm việc cố định theo thời gian của Quý khách.', '4000000', 'Tháng');
INSERT INTO bangphidv (`idloaidv`, `tendv`, `mota`, `gia`, `donvitinh`) VALUES ('50', 'Giúp việc nhà ăn theo giờ', 'Linh hoạt sắp xếp lịch làm việc cố định theo thời gian của Quý khách.', '200000', 'Giờ');

INSERT INTO bangphidv (`idloaidv`, `tendv`, `mota`, `gia`, `donvitinh`) VALUES ('51', 'Chăm sóc người già tại nhà', 'Người giúp việc đến tận nhà của khách hàng để chăm sóc', '250000', 'Ngày');
INSERT INTO bangphidv (`idloaidv`, `tendv`, `mota`, `gia`, `donvitinh`) VALUES ('51', 'Chăm sóc người già tại bệnh viện', 'Người giúp việc đến tận bệnh viện để chăm sóc', '300000', 'Ngày');

INSERT INTO bangphidv (`idloaidv`, `tendv`, `mota`, `gia`, `donvitinh`) VALUES ('52', 'Chăm sóc trẻ em', 'Người giúp việc được trang bị kiến thức để có thể chăm sóc trẻ', '5000000', 'Tháng');

INSERT INTO bangphidv (`idloaidv`, `tendv`, `mota`, `gia`, `donvitinh`) VALUES ('53', 'Giúp việc ngày Tết theo giờ', 'Tùy chỉnh vào thời gian và công việc của khách hàng thuê', '80000', 'Giờ');
INSERT INTO bangphidv (`idloaidv`, `tendv`, `mota`, `gia`, `donvitinh`) VALUES ('53', 'Giúp việc ngày Tết theo ngày', 'Tùy chỉnh vào thời gian và công việc của khách hàng thuê', '350000', 'Ngày');

INSERT INTO nhanvien (`hoten`, `gioitinh`, `ngaysinh`, `sdt`, `cmnd`, `luong`, `hinhanh`) VALUES ('Nguyễn Anh', 'Nam', '1990-12-03', '0938283928', '938291839', '10000000', '');
INSERT INTO nhanvien (`hoten`, `gioitinh`, `ngaysinh`, `sdt`, `cmnd`, `luong`, `hinhanh`) VALUES ('Nguyễn Huy', 'Nam', '1986-02-24', '0938463728', '831291839', '12000000', '');
INSERT INTO nhanvien (`hoten`, `gioitinh`, `ngaysinh`, `sdt`, `cmnd`, `luong`, `hinhanh`) VALUES ('Lý Diệu Hà', 'Nữ', '1992-06-17', '0946362734', '162849302', '12000000', '');
INSERT INTO nhanvien (`hoten`, `gioitinh`, `ngaysinh`, `sdt`, `cmnd`, `luong`, `hinhanh`) VALUES ('Vũ Lam An', 'Nữ', '1988-08-14', '0383928391', '163728912', '10000000', '');


