import Template from '../static/ASCTemplate';

export default function Security() {
    const security = {
        link1: "https://api.smartvoting.cc/v1/security/sv",
        link2: "https://api.smartvoting.cc/v1/security/ec",
        header1: "Smart Voting Security",
        header2: "Elections Canada Security",
    };

    return (
        <Template content={security} />
    );
}
