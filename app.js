    //OBTENEMOS LOS CHECKSBOS
    const c_aire_acondicionado= document.getElementById('c_aire_acondicionado')
    const c_refrigeracion= document.getElementById('c_refrigeracion')
    const c_ducto_aire= document.getElementById('c_ducto_aire')
    const c_caba_cuarto= document.getElementById('c_caba_cuarto')
    const c_sistema_chiller= document.getElementById('c_sistema_chiller')


    //OBTENEMOS LOS ACORDEONES EXISTENTES
    const a_aire_acondicionado  =   document.querySelector('.item_acordeon_aire')
    const a_refrigeracion       =   document.querySelector('.item_acordeon_refrigeracion')
    const a_ducto               =   document.querySelector('.item_acordeon_ducto')
    const a_caba_cuarto         =   document.querySelector('.item_acordeon_caba_cuarto')
    const a_chiller             =   document.querySelector('.item_acordeon_chiller')
   

    c_aire_acondicionado.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_aire_acondicionado = c_aire_acondicionado.checked ? true : false;
        if (mostrar_aire_acondicionado == true){
            a_aire_acondicionado.style.display='block'
            
        }else{
            a_aire_acondicionado.style.display='none'
        }
        
    })  


    c_sistema_chiller.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_sistema_chiller = c_sistema_chiller.checked ? true : false;
        if(mostrar_sistema_chiller==true){
            a_chiller.style.display='block'
        }else{
            a_chiller.style.display='none'
        }


    })


    c_ducto_aire.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_ducto_aire= c_ducto_aire.checked ? true: false;
        if(mostrar_ducto_aire ==true){
            a_ducto.style.display='block'
        }else{
            a_ducto.style.display='none'
        }
    })


    c_refrigeracion.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_refrigeracion= c_refrigeracion.checked ? true: false;
        if(mostrar_refrigeracion==true){
            a_refrigeracion.style.display='block'
        }else{
            a_refrigeracion.style.display='none'
        }
    })

    c_caba_cuarto.addEventListener('change',(e)=>{
        e.preventDefault()
        const mostrar_caba_cuarto= c_caba_cuarto.checked ? true: false;
        if(mostrar_caba_cuarto==true){
            a_caba_cuarto.style.display='block'
        }else{
            a_caba_cuarto.style.display='none'
        }
    })

//PARTE 2
const body_aire = document.querySelector('.acordion_body_aire')
const body_refrigeracion=document.querySelector('.acordion_body_refrigeracion')
const body_ducto =document.querySelector('.acordion_body_ductos')
const body_caba_cuarto=document.querySelector('.acordion_body_caba_cuarto')
const body_chiller=document.querySelector('.acordion_body_chiller')

const cantidad_aire=document.getElementById('cantidad_aire')
const cantidad_refrigeracion=document.getElementById('cantidad_refrigeracion')
const cantidad_ductos=document.getElementById('cantidad_ductos')
const cantidad_caba_cuarto=document.getElementById('cantidad_caba_cuarto')
const cantidad_chiller=document.getElementById('cantidad_chiller')

cantidad_aire.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='carta_aire_acondicionado${i+1}'>
      <h4>Aire Acondicionado ${i+1}</h4>
      <div class=cuerpo_cartas>
      
      <label for=""><strong>Tipo de Servicio</strong></label>
      <table>
        <tr>
          <td><label for="">Proyecto</label></td>
          <td><input type="checkbox" value="proyecto" name="proyecto_aire${i+1}" class="aire_servicio_display input_aire_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Asesoria</label></td>
          <td><input type="checkbox" value="asesoria" name="asesoria_aire${i+1}" class="aire_servicio_display input_aire_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Presupuesto</label></td>
          <td><input type="checkbox" value="presupuesto" name="presupuesto_aire${i+1}" class="aire_servicio_display input_aire_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Diagnostico/Revision</label></td>
          <td>  <input type="checkbox" value="diagnostico" name="diagnostico_aire${i+1}" class="input_aire_checkboxes"> </td>
        </tr>
        <tr>
          <td><label for="">Instalacion</label></td>
          <td><input type="checkbox" value="instalacion" name="instalacion_aire${i+1}" class="aire_servicio_display input_aire_checkboxes"></td>

        </tr>
        <tr>
          <td><label for="">Desinstalacion</label></td>
          <td><input type="checkbox" value="desinstalacion" name="desinstalacion_aire${i+1}" class="aire_servicio_display input_aire_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Mantenimiento</label></td>
          <td><input type="checkbox" value="mantenimiento" name="mantenimiento_aire${i+1}" class="input_aire_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Reparacion</label></td>
          <td><input type="checkbox" value="reparacion" name="reparacion_aire${i+1}" class="input_aire_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Recarga de Gas</label></td>
          <td><input type="checkbox" value="recarga_gas" name="recarga_gas_aire${i+1}" class="input_aire_checkboxes"></td>
        </tr>
      </table>
          
      <div class="container_servicio_adicional_aire${i+1} container_servicio_adicional_aire">
      <label for=""><strong>Servicio Adicional:</strong></label>
      <table>
          <tr>
            <td><label for="">Electricidad</label></td>
            <td><input type="checkbox" name="electricidad_aire${i+1}" value="electricidad" class="input_aire_checkboxes"></td>
          </tr>
          <tr>
            <td><label for="">Albañileria</label></td>
            <td><input type="checkbox" name="albañileria_aire${i+1}" value="albañileria" class="input_aire_checkboxes"></td>
          </tr>
          <tr>
            <td><label for="">Herreria</label></td>
            <td><input type="checkbox" name="herreria_aire${i+1}" value="herreria" class="input_aire_checkboxes"></td>
          </tr>
          <tr>
            <td><label for="">Plomeria</label></td>
            <td><input type="checkbox" name="plomeria_aire${i+1}" value="plomeria" class="input_aire_checkboxes"></td>
          </tr>
          <tr>
            <td><label for="">Pintura</label></td>
            <td><input type="checkbox" name="pintura_aire${i+1}" value="pintura" class="input_aire_checkboxes"></td>
          </tr>
          <tr>
            <td><label for="">Otro, especifique</label></td>
            <td><input type="checkbox" name="otro_aire${i+1}" value="otro" class="otro_especifique_aire input_aire_checkboxes"></td>
          </tr>
      </table>
      <textarea name="textarea_aire${i+1}" id="" class="text_area input_aire"></textarea>
    </div>    
        
     
      <label for=""><strong>Tipo de Equipo</strong></label>
      <select name="tipo_de_equipo_aire${i+1}" id="" class="input_aire">
          <option value="cortina de aire">Cortina de Aire</option>
          <option value="aire portatil">Aire Portatil</option>
          <option value="aire de ventana">Aire de Ventana</option>
          <option value="split">Split</option>
          <option value="multi split">Multi Split</option>
          <option value="split piso techo">Split Piso Techo</option>
          <option value="split fain coil">Split Fain Coil</option>
          <option value="split gabinete">Split Gabinete</option>
          <option value="split cassette">Split Cassette</option>
          <option value="equipo compacto">Equipo Compacto</option>
          
      </select>
      
      <div class="container_capacidad">
          <label for=""><strong>Capacidad</strong></label>
          <select name="capacidad_aire${i+1}" id="" class="input_aire">
              <option value="no lo se">No lo se</option>
              <option value="5 mil">5 mil</option>
              <option value="9 mil">9 mil</option>
              <option value="12 mil">12 mil</option>
              <option value="18 mil">18 mil</option>
              <option value="24 mil">24 mil</option>
              <option value="36 mil">36 mil</option>
              <option value="4 Tr">4 Tr</option>
              <option value="5 Tr">5 Tr</option>
              <option value="7 Tr">7 Tr</option>
              <option value="10 Tr">10 Tr</option>
              <option value="15 Tr">15 Tr</option>
              <option value="20 Tr">20 Tr</option>
          </select>
      </div>
      </div>
  </div>`
    }
    body_aire.innerHTML=contenido
   



    const otro_especifique_aire=document.querySelectorAll(".otro_especifique_aire")
    const cantidad_aire_display= document.querySelectorAll(".aire_servicio_display")
    const container_servicio_adicional_aire=document.querySelectorAll(".container_servicio_adicional_aire")
    otro_especifique_aire.forEach(element=>{
      element.addEventListener("change",(e)=>{

        const text_area=element.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling
        if (element.checked) {
          text_area.style.display="block"
        }else{
          text_area.style.display="none"
        }
        
      })
    })
    cantidad_aire_display.forEach(element => {
      element.addEventListener("change",(e)=>{
        
        const sub_servicio=element.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling
        if(element.checked){
          sub_servicio.style.display="block"
        }else{
          sub_servicio.style.display="none"
        }
      })
    });





})
 


cantidad_refrigeracion.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='carta_refrigeracion${i}'>
        <h4>Refrigeracion ${i+1}</h4>
        <div class=cuerpo_cartas>
        
        <label for=""><strong>Tipo de Servicio</strong></label>
      <table>
        <tr>
          <td><label for="">Proyecto</label></td>
          <td><input type="checkbox" value="proyecto" name="proyecto_refrigeracion${i+1}" class="input_refrigeracion_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Asesoria</label></td>
          <td><input type="checkbox" value="asesoria" name="asesoria_refrigeracion${i+1}" class="input_refrigeracion_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Presupuesto</label></td>
          <td><input type="checkbox" value="presupuesto" name="presupuesto_refrigeracion${i+1}" class="input_refrigeracion_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Diagnostico/Revision</label></td>
          <td>  <input type="checkbox" value="diagnostico" name="diagnostico_refrigeracion${i+1}" class="input_refrigeracion_checkboxes"> </td>
        </tr>
        <tr>
          <td><label for="">Instalacion</label></td>
          <td><input type="checkbox" value="instalacion" name="instalacion_refrigeracion${i+1}" class="input_refrigeracion_checkboxes"></td>

        </tr>
        <tr>
          <td><label for="">Desinstalacion</label></td>
          <td><input type="checkbox" value="desinstalacion" name="desinstalacion_refrigeracion${i+1}" class="input_refrigeracion_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Mantenimiento</label></td>
          <td><input type="checkbox" value="mantenimiento" name="mantenimiento_refrigeracion${i+1}" class="input_refrigeracion_checkboxes"></td>
        </tr>
        <tr>
          <td><label for="">Reparacion</label></td>
          <td><input type="checkbox" value="reparacion" name="reparacion_refrigeracion${i+1}" class="input_refrigeracion_checkboxes"></td>
        </tr>
       
      </table>
        <label for="">Tipo de Equipo</label>
            <select name="tipo_de_equipo_refrigeracion${i+1}" id="" class="input_refrigeracion">
                <option value="Filtros para agua">Filtros para agua</option>
                <option value="Nevera Portatil">Nevera Portatil</option>
                <option value="Nevera Ejecutiva">Nevera Ejecutiva</option>
                <option value="Nevera Pequeña">Nevera Pequeña</option>
                <option value="Nevera Grande">Nevera Grande</option>
                <option value="Mini Perco">Mini Perco</option>
                <option value="Perco">Perco</option>
                <option value="Congelador">Congelador</option>
                <option value="Heladeria">Heladeria</option>
                <option value="Fabricador de Hielo">Fabricador de Hielo</option>
                <option value="Exibidores">Exibidores</option>
                <option value="Vitrinas">Vitrinas</option>
                <option value="Dispensador">Dispensador</option>
                <option value="Otro">Otro, especifique.</option>
            </select>
            
        
        </div>
    </div>`
    }
    body_refrigeracion.innerHTML=contenido
})

cantidad_ductos.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='carta_ductos${i}'>
        <h4>Ducto ${i+1}</h4>
        <div class=cuerpo_cartas>
        
       <label for=""><strong>Tipo de Servicio</strong></label>
      <table>
        <tr>
          <td><label for="">Proyecto</label></td>
          <td><input type="checkbox" value="proyecto"></td>
        </tr>
        <tr>
          <td><label for="">Asesoria</label></td>
          <td><input type="checkbox" value="asesoria"></td>
        </tr>
        <tr>
          <td><label for="">Presupuesto</label></td>
          <td><input type="checkbox" value="presupuesto"></td>
        </tr>
        <tr>
          <td><label for="">Diagnostico/Revision</label></td>
          <td>  <input type="checkbox" value="diagnostico"> </td>
        </tr>
        <tr>
          <td><label for="">Instalacion</label></td>
          <td><input type="checkbox" value="instalacion"></td>

        </tr>
        <tr>
          <td><label for="">Desinstalacion</label></td>
          <td><input type="checkbox" value="desinstalacion"></td>
        </tr>
        <tr>
          <td><label for="">Mantenimiento</label></td>
          <td><input type="checkbox" value="mantenimiento"></td>
        </tr>
        <tr>
          <td><label for="">Reparacion</label></td>
          <td><input type="checkbox" value="reparacion"></td>
        </tr>
       
      </table>
        <div>
                    <label for="">¿Cuantos Metros Cuadrados son?</label>
                    <input type="text">

                    <label for="">¿Dispone de los planos?</label>
                    
                      <div>
                            <label for="">Si</label>
                            <input type="checkbox">
                            <label for="">No</label>
                            <input type="checkbox">
                      </div>

                    <label for="">Alto, Largo y Ancho (Opcional)</label>
                    <input type="text">   
        </div>
         <label for="">Por favor Seleccione:</label>
                <select name="" id="">
                    <option value="">Domestico</option>
                    <option value="">Comercial</option>
                    <option value="">Industrial</option>  
                </select>
        </div>
    </div>`
    }
    body_ducto.innerHTML=contenido
})

cantidad_caba_cuarto.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas" id='carta_caba_cuarto${i}'>
        <h4>Almacenamiento ${i+1}</h4>
        <div class=cuerpo_cartas>
        
        <label for=""><strong>Tipo de Servicio</strong></label>
      <table>
        <tr>
          <td><label for="">Proyecto</label></td>
          <td><input type="checkbox" value="proyecto"></td>
        </tr>
        <tr>
          <td><label for="">Asesoria</label></td>
          <td><input type="checkbox" value="asesoria"></td>
        </tr>
        <tr>
          <td><label for="">Presupuesto</label></td>
          <td><input type="checkbox" value="presupuesto"></td>
        </tr>
        <tr>
          <td><label for="">Diagnostico/Revision</label></td>
          <td>  <input type="checkbox" value="diagnostico"> </td>
        </tr>
        <tr>
          <td><label for="">Instalacion</label></td>
          <td><input type="checkbox" value="instalacion"></td>

        </tr>
        <tr>
          <td><label for="">Desinstalacion</label></td>
          <td><input type="checkbox" value="desinstalacion"></td>
        </tr>
        <tr>
          <td><label for="">Mantenimiento</label></td>
          <td><input type="checkbox" value="mantenimiento"></td>
        </tr>
        <tr>
          <td><label for="">Reparacion</label></td>
          <td><input type="checkbox" value="reparacion"></td>
        </tr>
       
      </table>
       
        <div>
                    <label for="">¿Cuantos Metros Cuadrados son?</label>
                    <input type="text">

                    <label for="">¿Dispone de los planos?</label>
                    
                      <div>
                            <label for="">Si</label>
                            <input type="checkbox">
                            <label for="">No</label>
                            <input type="checkbox">
                      </div>

                    <label for="">Alto, Largo y Ancho (Opcional)</label>
                    <input type="text">   
        </div>
         <label for="">Por favor Seleccione:</label>
                <select name="" id="">
                <option value="">Comercial</option>
                <option value="">Industrial</option>
                     
                </select>
        </div>
    </div>`
    }
    body_caba_cuarto.innerHTML=contenido
})

cantidad_chiller.addEventListener('input',(e)=>{
    let cantidad=e.target.value
    let contenido =''


    for(let i=0;i<cantidad;i++){
        contenido+=`<div class="cartas_chiller cartas" id='carta_chiller${i}'>
        <h4>Sistema Chiller ${i+1}</h4>
        <div class=cuerpo_cartas>
        
       <label for=""><strong>Tipo de Servicio</strong></label>
      <table>
        <tr>
          <td><label for="">Proyecto</label></td>
          <td><input type="checkbox" value="proyecto" id="chiller_servicio_proyecto${i}" class="chiller_servicio_proyecto${i} chiller_servicio chiller_servicio_display"></td>
        </tr>
        <tr>
          <td><label for="">Asesoria</label></td>
          <td><input type="checkbox" value="asesoria" id="chiller_servicio_asesoria${i}" class="chiller_servicio_asesoria${i} chiller_servicio chiller_servicio_display"></td>
        </tr>
        <tr>
          <td><label for="">Presupuesto</label></td>
          <td><input type="checkbox" value="presupuesto" id="chiller_servicio_presupuesto${i}" class="chiller_servicio_presupuesto${i} chiller_servicio chiller_servicio_display"></td>
        </tr>
        <tr>
          <td><label for="">Diagnostico/Revision</label></td>
          <td>  <input type="checkbox" value="diagnostico"> </td>
        </tr>
        <tr>
          <td><label for="">Instalacion</label></td>
          <td><input type="checkbox" value="instalacion" id="chiller_servicio_instalacion${i}" class="chiller_servicio_instalacion${i} chiller_servicio chiller_servicio_display"></td>

        </tr>
        <tr>
          <td><label for="">Desinstalacion</label></td>
          <td><input type="checkbox" value="desinstalacion" id="chiller_servicio_desinstalacion${i}" class="chiller_servicio_desinstalacion${i} chiller_servicio chiller_servicio_display"></td>
        </tr>
        <tr>
          <td><label for="">Mantenimiento</label></td>
          <td><input type="checkbox" value="mantenimiento chiller_servicio_display"></td>
        </tr>
        <tr>
          <td><label for="">Reparacion</label></td>
          <td><input type="checkbox" value="reparacion"></td>
        </tr>
        
      </table>


            <div class="container_servicio_adicional_chiller" id="container_servicio_adicional${i}">
                    <label for=""><strong>Servicio Adicional:</strong></label>
                    <table>
                        <tr>
                            <td><label for="">Electricidad</label></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td><label for="">Albañileria</label></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td><label for="">Herreria</label></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td><label for="">Plomeria</label></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td><label for="">Pintura</label></td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td><label for="">Otro, especifique</label></td>
                            <td><input type="checkbox" class="otro_especifique_chiller"></td>
                        </tr>
                    </table>
                    <textarea name="" id="" class="text_area"></textarea>

            </div>    

                <div class="container_capacidad">
                        <label for=""><strong>Capacidad</strong></label>
                        <select name="" id="">
                            <option value="">No lo se</option>
                            <option value="">5 mil</option>
                            <option value="">9 mil</option>
                            <option value="">12 mil</option>
                            <option value="">18 mil</option>
                            <option value="">24 mil</option>
                            <option value="">36 mil</option>
                            <option value="">4 Tr</option>
                            <option value="">5 Tr</option>
                            <option value="">7 Tr</option>
                            <option value="">10 Tr</option>
                            <option value="">15 Tr</option>
                            <option value="">20 Tr</option>
                        </select>
                    </div>
                </div>
    </div>`
    }
    body_chiller.innerHTML=contenido

    const cantidad_chiller_display= document.querySelectorAll(".chiller_servicio_display")
   
    const otro_especifique_chiller=document.querySelectorAll(".otro_especifique_chiller")

    otro_especifique_chiller.forEach(element=>{
      element.addEventListener("change",(e)=>{

        const text_area=element.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling
        if (element.checked) {
          text_area.style.display="block"
        }else{
          text_area.style.display="none"
        }
        
      })
    })



    cantidad_chiller_display.forEach(element => {
      element.addEventListener("change",(e)=>{
        
        const sub_servicio=element.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling
        console.log(sub_servicio)
        if(element.checked){
          sub_servicio.style.display="block"
        }else{
          sub_servicio.style.display="none"
        }
      })
    });

})







function recolectar_aires(){
  let valores_aire={}

  const aire_recolecta_checkboxes=document.querySelectorAll('.input_aire_checkboxes')
  const aire_recolecta=document.querySelectorAll('.input_aire')

  aire_recolecta_checkboxes.forEach(element => {
    if(element.checked){
      valores_aire[element.name]=element.value
    }
    
  });
  aire_recolecta.forEach(element => {
    
      valores_aire[element.name]=element.value
    
    
  });
  return valores_aire



}


function recolectar_refrigeracion(){
  let valores_refrigeracion={}

  const refrigeracion_recolecta_checkboxes=document.querySelectorAll('.input_refrigeracion_checkboxes')
  const refrigeracion_recolecta=document.querySelectorAll('.input_refrigeracion')

  refrigeracion_recolecta_checkboxes.forEach(element => {
    if(element.checked){
      valores_refrigeracion[element.name]=element.value
    }
    
  });
  refrigeracion_recolecta.forEach(element => {
    
      valores_refrigeracion[element.name]=element.value
    
    
  });
  return valores_refrigeracion

}


const btn_enviar=document.getElementById("enviar")
btn_enviar.addEventListener("click",(e)=>{
  e.preventDefault()
  const tipo_cliente      = document.getElementById("tipo_cliente").value
  const cedula            = document.getElementById("cedula").value
  const nombre_completo   = document.getElementById("nombre_completo").value
  const telefono          = document.getElementById("telefono").value
  const celular           = document.getElementById("celular").value
  const correo            = document.getElementById("correo").value
  const direccion         = document.getElementById("direccion").value
  const ruta_referencia   = document.getElementById("ruta_referencia").value
 
  const solicitud={
    tipo_cliente:tipo_cliente,
    cedula:cedula,
    nombre_completo:nombre_completo,
    telefono:telefono,
    celular:celular,
    correo:correo,
    direccion:direccion,
    ruta_referencia:ruta_referencia

 }


 


  const total_aires= recolectar_aires()
  const total_refrigeracion= recolectar_refrigeracion()

  solicitud["aires"]=total_aires
  solicitud["refrigeracion"]=total_refrigeracion
  const JSON_solicitud=JSON.stringify(solicitud)
  console.log(solicitud)
  
 


 
})




