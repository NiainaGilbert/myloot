import coffreBg from '@/public/coffre-bg.png';
import Image from 'next/image';
import '../auth.css';
export default function Login()
{
    return (
        <div className="container">
            <div className="rond B"></div>
            <div className="rond middle"></div>
            <Image src={coffreBg} alt="coffre-bg"/>
            <form>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="John@gmail.com" required/>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" placeholder="John123456" required/>
                <button type="submit">Log in</button>
                <button type="button">No account? Register</button>
            </form>
            <div className="rond kely"></div>        
        </div>
    );
}