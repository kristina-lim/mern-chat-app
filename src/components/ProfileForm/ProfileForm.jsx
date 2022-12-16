import botImg from '../../assets/bot.jpeg';


export default function SignupPage() {
  const [img, setImg] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState('');
  
  function validateImg(evt) {
    const file = evt.target.files[0];
    if (file.size > 1048576) {
      return alert('Max file size is 1MB');
    } else {
      setImg(file);
      setImgPreview(URL.createObjectURL(file));
    }
  }
  
  async function uploadImg() {
    const data = new FormData();
    data.append('file', img);
    data.append('upload_preset', 'ml_default');
    try {
      setUploadingImg(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/dupumqibn/image/upload', {
        method: 'POST',
        body: data
      });
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url;
    } catch(error) {
      setUploadingImg(false);
      console.log(error);
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (!img) return alert('Please upload your profile picture');
    const url = await uploadImg(img);
    console.log(url);
  }

  return (
    <>
      <div className='signup-profile-pic-container'>
        <img src={imgPreview || botImg} alt='' className='signup-profile-pic' />
        <label htmlFor='image-upload' className='image-upload-label'>
          <MDBIcon fas icon='plus-circle add-picture-icon' />
        </label>
        <input type='file' id='image-upload' hidden accept='image/png, image/jpeg' onChange={validateImg} />
      </div>
      <MDBBtn type='submit' className='mb-4' block>
        {uploadingImg ? 'Signing you up..' : 'Signup'}
      </MDBBtn>
    </>
  )
}