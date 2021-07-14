import React from 'react';
import FormerStudentLeft from './FormerStudentLeft';
import FormerStudentRight from './FormerStudentRight';
import {louis} from '../../utils/data';

export default function AboutSection() {
    const url = 'https://www.slidearea.com';

    return (
        <div className="about-section section" id="about">
            <div className="bio">
                <h1 className="heading serif">Biography</h1>
                <p className="text-block">
                    Timothy Anderson is Associate Professor of Trombone at the College-Conservatory of Music, University of Cincinnati (CCM), a position he has held since 2006.  Teaching duties include Applied Lessons, Chamber Music, Excerpt Class, Studio Class, Trombone Choir, and other related trombone topics.  
                </p>
                <p className="text-block">
                    In addition to his duties at CCM, Professor Anderson has served as Principal Trombone of the Dayton Philharmonic for 27 years.  He has appeared as a soloist with that orchestra on multiple occasions and contributed to several recordings.  
                </p>
                <p className="text-block">
                    As a chamber musician, Mr. Anderson is an active member of the Elysian Trombone Consort.  This group has commissioned and premiered over 25 new works for trombone quartet.  Several of the works written for this group have already entered the standard repertoire.  
                </p>
                <p className="text-block">
                    Mr. Anderson is a former member of the Carillon Brass Quintet where he was active for over 20 years.  In addition to presenting many chamber recitals, the quintet served as guest artists with orchestras and bands.  During those “quintet years” Mr. Anderson was part of over 1500 educational concerts in public and private schools.  
                </p>
                <p className="text-block">
                    As an advocate for new music, Mr. Anderson has premiered many new solo works and recorded two CDs of original commissions-Trav'ler and Ex Libris.  A third recording of original works for trombone and organ is underway.   
                </p>
                <p className="text-block">
                    Professional appearances include Ohio Music Educator’s Conference, American Trombone Workshop, International Trombone Festival, College Music Society, and the International Women’s Brass Conference.  He has given several recital and masterclass tours and presented at colleges and universities around the country.
                </p>
            </div>
            <div className="former-students">
                <h1 className="heading serif">Former Students</h1>
                <FormerStudentLeft name={'Joseph Alessi'} pic={louis} href={url} website={'www.slidearea.com'}>Principal trombonist in the NY Philharmonic | Professor of trombone at Juliard</FormerStudentLeft>
                <FormerStudentRight name={'Joseph Alessi'} pic={louis} href={url} website={'www.slidearea.com'}>Principal trombonist in the NY Philharmonic | Professor of trombone at Juliard</FormerStudentRight>
                <FormerStudentLeft name={'Joseph Alessi'} pic={louis} href={url} website={'www.slidearea.com'}>Principal trombonist in the NY Philharmonic | Professor of trombone at Juliard</FormerStudentLeft>
                <FormerStudentRight name={'Joseph Alessi'} pic={louis} href={url} website={'www.slidearea.com'}>Principal trombonist in the NY Philharmonic | Professor of trombone at Juliard</FormerStudentRight>
                <FormerStudentLeft name={'Joseph Alessi'} pic={louis} href={url} website={'www.slidearea.com'}>Principal trombonist in the NY Philharmonic | Professor of trombone at Juliard</FormerStudentLeft>
                <FormerStudentRight name={'Joseph Alessi'} pic={louis} href={url} website={'www.slidearea.com'}>Principal trombonist in the NY Philharmonic | Professor of trombone at Juliard</FormerStudentRight>
            </div>
        </div>
    )
}
