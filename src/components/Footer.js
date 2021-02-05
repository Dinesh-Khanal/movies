import React from 'react'

function Footer() {
    const pStyle={
        textAlign:'center',
        background: '#ccc',
        padding: '8px'
    }
    return (
        <div className="footer">
            <p style={pStyle}>&copy;2020 Dinesh Khanal, All right reserved</p>
        </div>
    )
}

export default Footer
