import React, {useState} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export const DatosProd=()=>{
    const [id, setId] = useState('')
    const [precio, setprecio] = useState('')
    const [career, setCareer] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleIdChange = (event) => {
        setId(event.target.value)
    }
    const handleprecioChange = (event) => {
        setprecio(event.target.value)
    }
    const handleCareerChange = (event) => {
        setCareer(event.target.value)
    }
    const handleImageUpload = (event) => {
        const file = event.target.files?.[0]
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setImageUrl(reader.result)
        })
        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const alumnos=[]
    const [alumn,setAlumn]=useState(alumnos)

    const [showModal, setShowModal] = useState(false)
    const handleShowModal=()=>{
        setShowModal(true)
    }
    const handleCloseModal=()=>{
        setShowModal(false)
    }
    const [edit, setEdit] = useState(false)
    const [buttonSubmitText, setButtonSubmitText] = useState('Add')
    const [indexToEdit, setIndexToEdit] = useState(0)


    const handleSubmit = (event) => {
        event.preventDefault();
        if(id===''||precio===''||career===''||imageUrl===''){
            alert('NO ESTAN LLENOS')
        }else{
            if(edit===false){
                setAlumn([...alumn,{id:id,precio:precio,career:career,image:imageUrl}])
            }else{
                alumn[indexToEdit]={...alumn[indexToEdit],id:id,precio:precio,career:career,image:imageUrl}
                setAlumn(alumn)
                setButtonSubmitText('AGREGAR')
                setEdit(false)
            }
            setShowModal(false)
            setId('')
            setprecio('')
            setCareer('ISIC')
            setImageUrl('')
        }
    }

    const deleteElement=(id)=>{
        setAlumn(alumn.filter(obj => obj.id !== id))
    }
    const editElement=(index)=>{
        setId(alumn[index].id)
        setprecio(alumn[index].precio)
        setCareer(alumn[index].career)
        setImageUrl(alumn[index].image)
        setEdit(true)
        setButtonSubmitText('EDIT')
        setIndexToEdit(index)
        handleShowModal()
    }
    return(
        <>
            <div style={{textAlign:"left"}}>
                <button id={"buttonAddNew"} onClick={()=>handleShowModal()}>NUEVO MEDICAMENTO</button>
            </div>
            {showModal &&
                    <Modal isOpen={showModal} toggle={()=>handleShowModal()}>

                    <form onSubmit={handleSubmit}>
                        <ModalHeader classprecio="fondoAr">MEDICAMENTOS</ModalHeader>
                        <ModalBody classprecio="fondoM">
                            <input type={"file"} accept={"image/*"} onChange={handleImageUpload}/>
                            <br />
                            <label>
                                CLAVE PL:<input id={"inputs"} type={"number"} value={id} onChange={handleIdChange}/>
                            </label>
                            <br/><br/>
                            <label>
                                PRECIO:<input id={"inputs"} type={"text"} value={precio} onChange={handleprecioChange}/>
                            </label>
                            <br/><br/>
                            <label>
                                TIPO DE MEDICAMENTO:
                                <select id={"inputs"} value={career} onChange={handleCareerChange}>
                                    <option value={"PASTILLA"}>PASTILLA</option>
                                    <option value={"POMADA"}>POMADA</option>
                                    <option value={"INYECCION"}>INYECCION</option>
                                </select>
                            </label>
                        </ModalBody>
                        <ModalFooter style={{backgroundColor: "#0cdcef"}}>
                            <button id={"buttonAdd"} type={"submit"}>{buttonSubmitText}</button>
                            <button id={"buttonCancel"} onClick={handleCloseModal}>CANCELAR</button>
                        </ModalFooter>

                    </form>
                </Modal>
            }
            <div id={"contenedor"}>
                <table border={7} style={{margin:"10px",textAlign:"center"}}>
                    <thead>
                    <tr>
                        <th style={{width:"3rem"}}>NC</th>
                        <th id={"th8rem"}>PRECIO</th>
                        <th id={"th8rem"}>TIPO MEDICAMENTO</th>
                        <th style={{width:"15rem"}}>IMAGEN</th>
                        <th id={"th2rem"}></th>
                        <th id={"th2rem"}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        alumn.map((item,index)=>(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.precio}</td>
                                <td>{item.career}</td>
                                <td><img src={item.image} classprecio   ="foto" alt="foto"/></td>
                                <td><button id={"buttonAdd"} onClick={()=>editElement(index)}>EDIT</button></td>
                                <td><button id={"buttonCancel"} onClick={()=>deleteElement(item.id)}>BORRAR</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}