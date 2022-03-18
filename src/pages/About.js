import Template from '../static/ASCTemplate';

export default function About() {
    const about = {
        link1: "https://api.smartvoting.cc/v1/about/sv",
        link2: "https://api.smartvoting.cc/v1/about/ec",
        header1: "About Smart Voting",
        header2: "About Elections Canada"
    };

    return (
        <Template content={about}/>
    );
}
