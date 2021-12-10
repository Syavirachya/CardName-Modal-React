import React, { useState } from 'react';
import {useHistory} from 'react-dom';
import Card from './Card';


function Input_Form() {
    const input = {
        nama:"",
        tanggallahir: "", 
        jeniskelamin:"",   
        alamat: "",  
        phone: "",
        email:"", 
        job: "", 
        foto: "",
    };

    
    const [
        { nama,
         tanggallahir,
         jeniskelamin, 
         alamat, 
         phone, 
         email,
         job, 
         foto}, setInput] = React.useState(input);


    const [file, setFile]= useState('');
    

    
    const submitHandler = e => {
        const { name, value } = e.target;
        setInput(prevState => ({ ...prevState, [name]: value }));
    };

    return(
        <div>
            <form>
            <div className='card' id="form-input-card">
            <div className="card-body">
                    
                    <h3 className="card-title">Silahkan Masukan Data </h3>


                    <div className="form-group">
                        <label for="nama">Nama Lengkap</label>
                        <input type="text" className="form-control" name='nama' id="nama" placeholder="Masukan Nama Lengkap Anda" value={nama} onChange={submitHandler}/>
                    </div>

          
                    <div className="form-group">
                        <label for="tanggallahir">Tanggal Lahir</label>
                        <input type="date" className="form-control" name='tanggallahir' id="birthdate" value={tanggallahir} onChange={submitHandler}/>
                    </div>

                    <div className="form-group">
                    <label>Jenis Kelamin</label>
                        <select className="form-select" name='jeniskelamin' id='jeniskelamin' value={jeniskelamin}  onChange={submitHandler} >
                            <option id='pilih' value="none">Pilih Jenis Kelamin</option>
                            <option id='laki' value="Laki-laki">Laki-laki</option>
                            <option id='perempuan' value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    
                
                    <div className='form-group'>
                      <label for="alamat">Alamat Domisili</label>
                      <textarea className="form-control" name='alamat' id="alamat" placeholder="Masukan alamat domisili Anda" value={alamat} onChange={submitHandler}/>
                    </div>

                    <div className="form-group">
                        <label for="phone">No. Handphone</label>
                        <input type="number" className="form-control" name='phone' id="phone" placeholder="Masukan No. Handphone" value={phone} onChange={submitHandler}/>
                    </div>

                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="text" className="form-control" name='email' id="email" placeholder="Masukan Email Anda" value={email} onChange={submitHandler}/>
                    </div>                    


                    <div className="form-group">
                        <label>Job</label>
                        <select className="form-select" name='job' id='job' value={job}  onChange={submitHandler} >
                            <option id='qa' value="IT Quality Assurance">IT Quality Assurance</option>
                            <option id='pa' value="IT Product Analyst">IT Product Analyst</option>
                            <option id='ss' value="Support Specialist">Support Specialist</option>
                            <option id='sa' value="System Analyst">System Analyst</option>
                            <option id='fd' value="FullStack Developer">FullStack Developer</option>
                            <option id='ue' value="User Experience Designer">User Experience Designer</option>
                            <option id='ne' value="Network Engineer">Network Engineer</option>
                            <option id='da' value="Database Administrator">Database Administrator</option>
                            <option id='fd' value="Frontend Developer">Frontend Developer</option>
                            <option id='bd' value="Backend Developer">Backend Developer</option>
                        </select>
                        
                    </div>
                    
                    <div className='form-group'>
                        <label>Upload Foto</label>
                        <input
                            type='file'
                            className='form-control'
                            onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
                        />
                    </div>
                    
              <Card
                    nama={nama}
                    tanggallahir={tanggallahir}
                    jeniskelamin={jeniskelamin}
                    alamat={alamat}
                    phone={phone}
                    email={email}
                    job={job}
                    foto={foto}
                    file={file}
                 
                />

                </div>
            
            </div>
            </form>
            </div>
            
           
        
    )

}

export default Input_Form;