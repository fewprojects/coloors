import { useState } from "react";
import {ChromePicker} from 'react-color'
import {useNavigate} from 'react-router-dom'

function AddColor() {
    const [background, setBackground] = useState('#000000')
    const [text, setText] = useState('#ffffff')
    const [isPending, setIsPending] = useState(false);
    const [bgColorPickerShow, setBgColorPickerShow] = useState(false)
    const [textColorPickerShow, setTextColorPickerShow] = useState(false)
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(background, text)
        const NewColor = { background, text }
        setIsPending(true)
        await fetch('http://localhost:8000/cards', {
            method: 'POST',
            headers: { "Content-type": "application/JSON" },
            body: JSON.stringify(NewColor)
        }).then(() => {
            console.log('New color theme added')
            console.log(JSON.stringify(NewColor))
            setIsPending(false)
            history('/')
        })
    }
    const showBgColorPicker = (e) => {
        e.preventDefault();
        setBgColorPickerShow(true)
        setTextColorPickerShow(false)
    }

    const showTextColorPicker = (e) => {
        e.preventDefault();
        setTextColorPickerShow(true)
        setBgColorPickerShow(false)
    }
    const closeModel = (e) => {
        e.preventDefault();
        setBgColorPickerShow(false)
        setTextColorPickerShow(false)
}
    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-6 text-center"><h3>Add Theme</h3></div>
                    <div className="addButton col-6 text-center">
                        {!isPending && <button type="submit" onClick={handleSubmit}>Add</button>}
                        {isPending && <button type="submit" disabled>Adding Theme...</button>}
                    </div>
                </div>
            
                <div className="">
                <div className="form container flex-sa-m">
                        <div className="backgroundChange">
                            <label>Background Color</label>
                            <button className="color_picker_btn" style={{ 'background': `${background}` }} onClick={showBgColorPicker}></button>
                            {bgColorPickerShow && (<div className="color_picker_model">
                                <div className="">
                                 <b className="model_close_btn" onClick={closeModel}>&times;</b>  
                                </div>
                                <div className="color_picker_wrapper">
                                <ChromePicker id="color_picker" className="color_picker" color={background} onChangeComplete={(color) => setBackground(color.hex)} />
                                </div>
                            </div>)}
                        </div>
                        <div className="textColorChange">
                            <label>Text Color</label>
                            <button className="color_picker_btn" style={{ 'background': `${text}` }} onClick={showTextColorPicker}></button>
                            {textColorPickerShow && (<div className="color_picker_model">
                                <div className="">
                                 <b className="model_close_btn" onClick={closeModel}>&times;</b>  
                                </div>
                                <div className="color_picker_wrapper">
                                <ChromePicker id="color_picker" className="color_picker" color={text} onChangeComplete={(color) => setText(color.hex)} />
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="showcase container flex-c-m" style={{ 'background': `${background}` }}>
                        <h3 style={{'color': `${text}`}}>{text}</h3>
                    </div>
                    
                </div>
            </form>
        </div>
    );
}

export default AddColor;