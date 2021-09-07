import React from 'react';
import { Wrapper, Table, TableRow, TableContent } from './Footer.styles';
import Facebook from '../images/facebook-square-brands.svg';
import Insta from '../images/instagram-brands.svg';
import YouTube from '../images/youtube-brands.svg';

const Foot = () => (
    <Wrapper>
        <Table>
            <TableRow>
                <th>
                    <img src={Facebook} alt='' className='lp'/>
                    <img src={Insta} alt=''/>
                    <img src={YouTube} alt=''/>
                </th>
            </TableRow>
            <TableRow>
                <TableContent>Audio and Subtitles</TableContent>
                <TableContent>Audio Description</TableContent>
                <TableContent>Help Center</TableContent>
                <TableContent>Gift Cards</TableContent>
            </TableRow>
            <TableRow>
                <TableContent>Media Center</TableContent>
                <TableContent>Investor Relations</TableContent>
                <TableContent>Jobs</TableContent>
                <TableContent>Terms of Use</TableContent>
            </TableRow>
            <TableRow>
                <TableContent>Privacy</TableContent>
                <TableContent>Legal Notices</TableContent>
                <TableContent>Cookie Preferences</TableContent>
                <TableContent>Corporate Information</TableContent>
            </TableRow>
            <TableRow>
                <TableContent>Contact Us</TableContent>
            </TableRow>
        </Table>

        <button>Service Code</button>
        <p>&copy; 2021 Ramabele, Inc. [d9ad05d9-c696-4896-8923-b5ea04c15246]</p>

    </Wrapper>
);

export default Foot;