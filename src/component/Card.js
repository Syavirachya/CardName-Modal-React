import React, { useEffect, useState } from 'react';
import './Input_Form.css';



function Card(props){
    const [info, setInfo] = React.useState([])
    

    const simpanHandler = (nama, tanggallahir,jeniskelamin, alamat, phone, email,job, foto, file) => {
      
     setInfo(prevState=>
                [...prevState,
                { "id": info.length + 1, 
                "nama": nama, 
                "tanggallahir": tanggallahir,
                "jeniskelamin":jeniskelamin, 
                "alamat": alamat, 
                "phone":phone,
                 "email":email,
                 "job":job, 
                 "foto":foto, 
                 'file':file }
                ])
    }

    console.log(info)
    
    return (
        <>
            <button
                id="simpan"
                onClick={() => { simpanHandler(props.nama,
                     props.tanggallahir,
                     props.jeniskelamin, 
                     props.alamat, 
                     props.phone, 
                     props.job, 
                     props.file, 
                     props.foto) }}
                data-bs-toggle="modal" 
                data-bs-target="#previewCard"
                type='button'
            >
              Simpan Kartu Nama
            </button>

            <div className="modal" id="previewCard" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                <div className = "card">
                       
                       <div className='prevGroup'>
                       <tbody>
                        
                           
                       <div className="top-container"> <img src={props.file} className="profile-img" alt='foto' />
                        <div className="ml-3">
                        
                          <h5 className="nama">{props.nama}</h5>
                          <span className="jk">{props.jeniskelamin}</span><br/><br/>
                          <span className="mail">{props.tanggallahir}</span>
        
                            </div>
                         </div>
                         
                         
                         <div className="name-container">
                             
                             <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
                                
                                 <div className="d-flex flex-column"> 
                                     <span className="job">{props.job}</span> 
                                     <span className="alamat">{props.alamat}</span> 
                                 </div>
                             </div>

                             <div className="container d-flex justify-content-between align-items-center">
                                
                                 <div className="d-flex flex-row"> 
                                 <div className="phonenum">
                                    <i className="nav-icon fa fa-phone"></i>
                                    <span className="phonenumdetail">{props.phone}</span>
                                </div>

                                <div className="email">
                                <i className="nav-icon fa fa-envelope"></i>
                                <span className="emaildetail">{props.email}</span>
                                </div>

                                 </div>
                             </div>
                            <button className="button is-small is-info">Edit</button>
                            <button className="button is-small is-danger">Delete</button>
      
                            
                         </div>
                        </tbody>
                       </div>
                    
                </div>
                  
                </div>
              </div>
            
            

        </>
    )
}

export default Card;