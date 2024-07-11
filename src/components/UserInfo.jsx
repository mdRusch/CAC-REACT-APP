import React from 'react';

export const UserInfo = ({ userInfo, handleChange, handleSubmit }) => (
  <div className="UserInfo col-4 me-4">
    <h2>Información del Usuario</h2>
    <form onSubmit={handleSubmit} className='row '>
      <label>
        Nombre:
        <input type="text" name="nombre" value={userInfo.nombre} onChange={handleChange} />
      </label>
      <label>
        Apellido:
        <input type="text" name="apellido" value={userInfo.apellido} onChange={handleChange} />
      </label>
      <label>
        Edad:
        <input type="number" name="edad" value={userInfo.edad} onChange={handleChange} />
      </label>
      <label>
        Altura (cm):
        <input type="number" name="altura" value={userInfo.altura} onChange={handleChange} />
      </label>
      <label>
        Peso (kg):
        <input type="number" name="peso" value={userInfo.peso} onChange={handleChange} />
      </label>
      <button type="submit">Guardar</button>
    </form>
  </div>
);
