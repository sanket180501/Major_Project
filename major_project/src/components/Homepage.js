import React from 'react'

const Homepage = () => {
  return <main className='container-fluid row h-100'>
    <section className='col-2 border-end g-2 container mh-100'>
      <div className="mh-10 border-bottom" style={{height: 100}}>
        <div className='row g-1 p-2 align-center justify-content-center'>
          <label className="btn btn-secondary" style={{width: 'max-content'}}>
            <input type="file" style={{display: 'none'}} onChange={(e)=>{
              if (e.target.files.length === 0) return
              alert(`${e.target.files[0].name} has been Uploaded successfully`)
            }} />
            <i className="zmdi zmdi-file"></i> Upload file
          </label>

          <label className="btn btn-secondary btn-sm" style={{width: 'max-content'}}>
            <input type="file" style={{display: 'none'}} onChange={(e)=>{
              if (e.target.files.length === 0) return
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

        <h2>Home Files</h2>
        <table className="table">
        <thead>
          <tr>
            
            <th scope="col">File</th>
            <th scope="col">Location</th>
            <th scope="col">Modified</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="https://filetype.io/content/images/jpg.png" width= "40px"class="img-fluid img-thumbnail"alt="Sheep"></img> Mark.jpg</td>
            <td>MyDrive</td>
            <td>01/01/2022</td>
          </tr>
          <tr>
           
            <td><img src="https://1000logos.net/wp-content/uploads/2020/05/Google-Docs-logo.png" width= "40px"class="img-fluid img-thumbnail"alt="Sheep"></img>info.doc</td>
            <td>MyDrive</td>
            <td>02/01/2022</td>
          </tr>

          <tr>
           
            <td><img src="https://1000logos.net/wp-content/uploads/2020/05/Google-Docs-logo.png" width= "40px"class="img-fluid img-thumbnail"alt="Sheep"></img>Document1.doc</td>
            <td>MyDrive</td>
            <td>02/01/2022</td>
          </tr>

          <tr>
            
            <td><img src="https://media.istockphoto.com/vectors/icon-major-file-format-vector-icon-illustration-vector-id1298834280?k=20&m=1298834280&s=612x612&w=0&h=SxEbyHKi18H1XpPpKKzoppWgMM3x0tc3veN5e6wl7Y8=" width= "40px"class="img-fluid img-thumbnail"alt="Sheep"></img>assignment.pdf</td>
            <td>MyDrive</td>
            <td>03/01/2022</td>
          </tr>

          <tr>
            
              <td><img src="https://media.istockphoto.com/vectors/icon-major-file-format-vector-icon-illustration-vector-id1298834280?k=20&m=1298834280&s=612x612&w=0&h=SxEbyHKi18H1XpPpKKzoppWgMM3x0tc3veN5e6wl7Y8=" width= "40px"class="img-fluid img-thumbnail"alt="Sheep">
              </img>Book.pdf</td>
              <td>MyDrive</td>
              <td>03/01/2022</td>
            </tr>



          <tr>
            <td><img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-mp4-vector-icon-png-image_3751509.jpg" width= "40px"class="img-fluid img-thumbnail"alt="Sheep">
            </img>Movie.mp4</td>
            <td>MyDrive</td>
            <td>04/01/2022</td>
          </tr>

          <tr>
            
          <td><img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-mp4-vector-icon-png-image_3751509.jpg" width= "40px"class="img-fluid img-thumbnail"alt="Sheep">
          </img>Video(1).mp4</td>
            <td>MyDrive</td>
            <td>05/01/2022</td>
          </tr>

          <tr>
            <td><img src="https://filetype.io/content/images/jpg.png" width= "40px"class="img-fluid img-thumbnail"alt="Sheep">
            </img>fall.jpg</td>
            <td>MyDrive</td>
            <td>06/01/2022</td>
          </tr>

          <tr>
            <td><img src="https://filetype.io/content/images/jpg.png" width= "40px"class="img-fluid img-thumbnail"alt="Sheep">
            </img>cristmas.jpg</td>
            <td>MyDrive</td>
            <td>07/01/2022</td>
          </tr>

          <tr>
            <td><img src="https://filetype.io/content/images/jpg.png" width= "40px"class="img-fluid img-thumbnail"alt="Sheep">
            </img>car.jpg</td>
            <td>MyDrive</td>
            <td>08/01/2022</td>
          </tr>

          <tr>
            
            <td><img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-mp4-vector-icon-png-image_3751509.jpg" width= "40px"class="img-fluid img-thumbnail"alt="Sheep">
            </img>Video2.mp4</td>
            <td>MyDrive</td>
            <td>07/01/2022</td>
          </tr>

          <tr>
            <td><img src="https://filetype.io/content/images/jpg.png" width= "40px"class="img-fluid img-thumbnail"alt="Sheep">
            </img> Nature.jpg</td>
            <td>MyDrive</td>
            <td>07/01/2022</td>
          </tr>

          <tr>
         
            <td><img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-mp4-vector-icon-png-image_3751509.jpg" width= "40px"class="img-fluid img-thumbnail"alt="Sheep">
            </img> real.mp4</td>
            <td>MyDrive</td>
            <td>07/01/2022</td>
            
          </tr>
        </tbody>
        
      </table>
      
      </div>
      
    </section>
    
  </main>
}

export default Homepage