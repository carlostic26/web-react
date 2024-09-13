import React from 'react';

interface ModalCardProps {
    showCard: boolean;
    message: string;
    onClose: () => void;
}

const ModalCard: React.FC<ModalCardProps> = ({ showCard, message, onClose }) => {
    if (!showCard) return null;

    return (
        <div onClick={onClose} style={styles.overlay}>
            <div style={styles.card}>
                <h1 style={{ fontWeight: 'bold', fontSize: '30px' }}>Atención</h1>
                <p style={{ fontSize: '15px' }}>{message}</p>
                <button onClick={onClose} style={{ ...styles.closeButton, fontSize: '10px', backgroundColor: '#003366' }}>
                    Cerrar
                </button>
            </div>
        </div>


    );
};

const styles = {
    overlay: {
        position: 'fixed' as 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px',
        width: '300px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center' as 'center',
    },
    closeButton: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
    },
};

export default ModalCard;