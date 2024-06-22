import React from 'react';

const Chat = () => {
  // Nomor WhatsApp atau WhatsApp Business Anda
  const whatsappNumber = '6281260366100'; // Ganti dengan nomor WhatsApp yang sesuai

  // Fungsi untuk membuka aplikasi WhatsApp dengan pesan pra-isi
  const openWhatsApp = () => {
    // Pesan pra-isi (optional)
    let message = "Halo, saya butuh bantuan terkait pemesanan. Bisa dibantu?";
    // URL WhatsApp dengan nomor dan pesan
    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    // Buka link di tab/window baru
    window.open(url, '_blank');
  };

  return (
    <div className="live-chat" style={styles.container}>
      <h2 style={styles.heading}>Live Chat</h2>
      <p style={styles.text}>Welcome to our live chat support. How can we help you today?</p>
      <button onClick={openWhatsApp} className="btn btn-primary" style={styles.button}>Chat via WhatsApp</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#132D46',
    padding: '20px',
    borderRadius: '8px',
    color: '#FFFFFF',
    textAlign: 'center',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '20px'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  text: {
    fontSize: '16px',
    marginBottom: '20px'
  },
  button: {
    backgroundColor: '#799AB9',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Chat;
