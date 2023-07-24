import "./Inicio.css"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Hamburguer from "../../img/hamburguesa.jpg"
import { motion } from "framer-motion";
import { useState } from "react";

const Inicio = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="body_main">
            <div className="body_title">
                <h1>Menú del Día</h1>
            </div>
            <motion.div layout className="body_card">
                <Card sx={{ maxWidth: 345 }} style={{borderRadius:'1rem'}}>
                    <motion.div whileTap={{ scale: 0.9 }} 
                                whileHover={{ scale: 1.05 }} 
                                layout='position' 
                                transition = {{layout: {duration: 1, type: "spring"}}} 
                                onClick={()=>setIsOpen(!isOpen)} style={{borderRadius:'1rem'}}>
                        <CardMedia  style={{borderRadius:'1rem'}} component="img" src={Hamburguer} alt="menú del día" />
                        <motion.div layout>
                            <motion.h2 style={{padding:'0.5rem'}} layout='position'>
                                Hamburguesa
                            </motion.h2>
                            {isOpen &&
                            <motion.p style={{padding:'0.5rem'}} layout='position'>
                                Breve descripción de hamburguesa e ingredientes
                            </motion.p>
                            }
                        </motion.div>
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    )
}

export default Inicio;