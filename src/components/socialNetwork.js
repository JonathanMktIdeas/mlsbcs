import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const SocialNetwork = () => {

    return (
        <div style={{ position: 'fixed', top: '30%', right: 0, zIndex: 9999, }}>
            <a href="https://www.facebook.com/groups/MLSBCSOfficialForum">
                <img src="/assets/images/join.png" width="40" />
            </a>
            <div style={{ background: '#79a7d7' }}>
                <div className="flex flex-col items-center p-2 mt-6">
                    <a href="https://www.instagram.com/mlsbcs/"><InstagramIcon size={10} className="text-white" /></a>
                    <a href="https://www.facebook.com/mlsbcsoficial"><FacebookIcon size={10} className="text-white" /></a>
                </div>
            </div>
        </div>
    );
};

export default SocialNetwork;
