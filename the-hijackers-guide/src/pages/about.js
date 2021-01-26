import React from "react";

function About(){
  return (
    <div className="about-container">
    <div className="about-header-container">
    <div className="about-header">
    <h1> About </h1>
    </div>
    </div>
    <div className="wrapper">
    <h3>In a context characterized by constraints and limitations to people's mobility,
    protests are also moving to the digital environment. Over the course of the year, more and more
    users have realized that the power exercised online can translate into real change and that,
    if used correctly, social media can become powerful tools for making one's voice heard.</h3>

    <div className="column-container">
    <div className="column">
    <p>
    A hashtag is a powerful tool to increase audience engagement.
    It creates a conversation about a topic labelling posts. Through hashtags, users join virtual
    debates and when the political, social, or cultural stance of a group of users is not shared by others,
    a hashtag hijack can occur. It is a collective action which involves thousands of people, organized into communities,
    who produce a clashing of texts, images, videos from different audiences. The result is a disorientation and virtual encroachment of space.
    </p>
    <p>
    This phenomenon is increasingly engaging a generation of experts in online mobilization, with organizational skills and a deep understanding
    of social media. Among these communities, the most powerful is the fan-base of K-Pop with millions of fans around the world. Members of this community,
    who decided to start or take part in a hijack, post contents related to their favorite K-Pop star: memes, images, quotes,
    music video frames, selfie, but mostly fan-cams (video that focuses on a person performing).
    </p></div>
    <div className="column">
    <p>
    <video style={{width: '100%', marginTop: '0.5em', marginBottom: '1em'}} muted autoPlay loop><source src="/assets/about/disclosure_intro.mp4"/> </video>
    The K-pop fandoms hijacked many hashtags: <br/>
    <u>#StandWithTuckerCarlson</u>, <u>#ExposeAntifa</u>, <u>#WhiteOutWednesday</u>, <u>#CalminKirkland</u>, <u>#WhiteLivesMatter</u>, <u>#AllLivesMatter</u>, <u>#Pro-Trump</u>, <u>#MAGA</u> and many others.
    </p>
    </div>
    </div>
<hr/>
    <div className="column-container">
    <div className="column">
    <h3 style={{padding: 0}}>The starting point of this website is the project <a href="https://doksavpc.github.io/dd16-phase2-group02/">Stan Wars: the rise of a new army</a>,
    which contains the results of our multi-channel research about hashtag hijacking and stan culture. </h3>
    <p>
    The goal was to analyze the phenomenon of stan groups’ online activism in its complexity,
    trying to provide different points of view about it. The analysis of K-Pop stans’
    role in the latest hashtag hijacking has shown that:
    </p>
    </div>
    <div className="column">
    <p>
    <div style={{position: 'relative', backgroundColor: 'black'}}><video style={{width: '100%', marginTop: '0.5em', marginBottom: '1em', opacity: 0.7}} muted autoPlay loop><source src="/assets/about/cover-phase2.mp4"/></video><div className="phase2-title"><h3>STAN WARS:<br/> THE RISE OF A NEW ARMY</h3><h4>AN ANALYSIS OF K-POP STANS’ ROLE <br/> IN THE LATEST HASHTAG HIJACKINGS</h4></div></div>
    The K-pop fandoms hijacked many hashtags: <br/>
    <b>#StandWithTuckerCarlson</b>, <b>#ExposeAntifa</b>, <b>#WhiteOutWednesday</b>, <b>#CalminKirkland</b>, <b>#WhiteLivesMatter</b>, <b>#AllLivesMatter</b>, <b>#Pro-Trump</b>, <b>#MAGA</b> and many others
    </p>
    </div>
    </div>

    </div>
    </div>

)}

export default About;
