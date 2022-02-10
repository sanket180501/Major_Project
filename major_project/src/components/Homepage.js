import React from 'react'

const Homepage = () => {
  return <main className='container-fluid row h-100'>
    <section className='col-2 border-end g-2 container mh-100'>
      <div className="mh-10 border-bottom" style={{height: 100}}>
        <div className='row g-1 p-2 align-center justify-content-center'>
          <label className="btn btn-secondary" style={{width: 'max-content'}}>
            <input type="file" style={{display: 'none'}} onChange={(e)=>{
              if (e.target.files.length == 0) return
              alert(`${e.target.files[0].name} has been Uploaded successfully`)
            }} />
            <i className="zmdi zmdi-file"></i> Upload file
          </label>

          <label className="btn btn-secondary btn-sm" style={{width: 'max-content'}}>
            <input type="file" style={{display: 'none'}} onChange={(e)=>{
              if (e.target.files.length == 0) return
              const folderName = e.target.files[0]?.webkitRelativePath.split('/')[0]
              alert(`${folderName} folder has been Uploaded successfully`)
            }} directory="" webkitdirectory="" mozdirectory="" />
            <i className="zmdi zmdi-folder"></i> Upload folder
          </label>
        </div>
      </div>
      <section className='row h-70'>
        Quick Actions
      </section>
    </section>
    <section className='col-10'>
      <div className='row h-100'>
        Files and folders will be displayed here
      </div>
    </section>
  </main>
}

export default Homepage
