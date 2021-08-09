import '../stylesheets/contact.css';

const Contact = () => {
    return(
        <div className=" card ">
        <h1>Drop a message</h1>
        <input className=" input " type="text " placeholder=" Your Name "/>
        <input className="input " type=" text " placeholder=" Your Email "/>
        <p>
            <textarea name="text " placeholder="Type your text here " className="input-text " cols=" 100 " rows="8 "></textarea></p>
        <button className="text ">Send</button>
        </div>
   
    )
}
export default Contact