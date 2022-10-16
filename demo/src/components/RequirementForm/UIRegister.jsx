import { useState } from "react";
import "../../sass/style.scss";

export const UIRegister = (props) => {
  const btnRegister = props.children;
  const [input, setInput] = useState({
    name: "",
    birthday: "",
    gender: "",
    birthplace: "",
    accommodation: "",
    idCard: "",
    mail: "",
    phone: "",
    type: "",
    career: "",
    education: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };
  const Form = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <h1 className="form-title">Đăng kí xét tuyển online</h1>
          <h3 className="title-candidate-info">Thông tin thí sinh</h3>
          <div className="container-candidate-info">
            <div className="candidate-info-item">
              <label htmlFor="name">Họ và tên</label>
              <input
                type="text"
                name="name"
                id="name"
                value={input.name}
                placeholder="Nhập họ và tên"
                onChange={handleChange}
              />
            </div>
            <div className="candidate-info-item">
              <label htmlFor="birthday">Ngày sinh</label>
              <input
                className="date"
                type="date"
                name="birthday"
                id="birthday"
                value={input.birthday}
                placeholder="Nhập ngày sinh"
                onChange={handleChange}
              />
            </div>
            <div className="candidate-info-item">
              <label htmlFor="gender">Giới tính</label>
              <select
                name="gender"
                id="gender"
                value={input.gender}
                defaultValue="Giới tính"
                onChange={handleChange}
              >
                <option value="Giới tính">Giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
            <div className="candidate-info-item">
              <label htmlFor="birthplace">Nơi sinh</label>
              <input
                type="text"
                name="birthplace"
                id="birthplace"
                value={input.birthplace}
                placeholder="Nhập nơi sinh"
                onChange={handleChange}
              />
            </div>
            <div className="candidate-info-item">
              <label htmlFor="accommodation">Quê quán</label>
              <input
                type="text"
                name="accommodation"
                id="accommodation"
                value={input.accommodation}
                placeholder="Nhập quê quán"
                onChange={handleChange}
              />
            </div>
            <div className="candidate-info-item">
              <label htmlFor="idcard">Số CMND/CCCD</label>
              <input
                type="text"
                name="idCard"
                id="idcard"
                value={input.idCard}
                placeholder="Nhập số CMND/CCCD"
                onChange={handleChange}
              />
            </div>
            <div className="candidate-info-item">
              <label htmlFor="mail">Email</label>
              <input
                type="text"
                name="mail"
                id="mail"
                value={input.mail}
                placeholder="Nhập email"
                onChange={handleChange}
              />
            </div>
            <div className="candidate-info-item">
              <label htmlFor="phone">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={input.phone}
                placeholder="Nhập số điện thoại"
                onChange={handleChange}
              />
            </div>
          </div>
          <h3 className="title-register-info">Thông tin đăng ký</h3>
          <div className="container-register-info">
            <div className="register-info-item">
              <label htmlFor="type">Chọn hệ đào tạo</label>
              <select
                name="type"
                id="type"
                value={input.type}
                defaultValue="Hệ đào tạo"
                onChange={handleChange}
              >
                <option value="Hệ đào tạo">Hệ đào tạo</option>
                <option value="Đại học">Đại học</option>
                <option value="Cao đẳng">Cao đẳng</option>
                <option value="Trung cấp">Trung cấp</option>
              </select>
            </div>
            <div className="register-info-item">
              <label htmlFor="career">Chọn ngành học</label>
              <select
                name="career"
                id="career"
                value={input.career}
                defaultValue="Ngành học"
                onChange={handleChange}
              >
                <option value="Ngành học">Ngành học</option>
                <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                <option value="Khoa học dữ liệu">Khoa học dữ liệu</option>
                <option value="Truyền thông và mạng máy tính">
                  Truyền thông và mạng máy tính
                </option>
                <option value="Hệ thống thông tin quản lý">
                  Hệ thống thông tin quản lý
                </option>
              </select>
            </div>
            <div className="register-info-item">
              <label htmlFor="education">Chọn trình độ học vấn</label>
              <select
                name="education"
                id="education"
                value={input.education}
                defaultValue="Trình độ học vấn"
                onChange={handleChange}
              >
                <option value="Trình độ học vấn">Trình độ học vấn</option>
                <option value="Tốt nghiệp THPT">Tốt nghiệp THPT</option>
                <option value="Đang học 12">Đang học 12</option>
                <option value="Đã có bằng cao đẳng,  trung cấp">
                  Đã có bằng cao đẳng, trung cấp
                </option>
              </select>
            </div>
          </div>
          {btnRegister}
        </form>
      </>
    );
  };
  const Result = () => {
    return (
        <>
            <h1>Chúc mừng bạn đăng ký thành công</h1>
            <h3>Hãy xem lại thông tin đã đăng ký</h3>
            <div className="container-info">
                <p>Họ tên: {input.name}</p>
                <p>Ngày sinh: {input.birthday}</p>
                <p>Giới tính: {input.gender}</p>
                <p>Nơi sinh: {input.birthplace}</p>
                <p>Quê quán: {input.accommodation}</p>
                <p>Số CMND/CCCD: {input.idCard}</p>
                <p>Địa chỉ email: {input.mail}</p>
                <p>Số điện thoại: {input.phone}</p>
                <p>Hệ đào tạo đăng ký: {input.type}</p>
                <p>Ngành học đăng ký: {input.career}</p>
                <p>Trình độ học vấn: {input.education}</p>
            </div>
        </>
    )
  };
  return <>{props.status === true ? <Form /> : <Result />}</>;
};
