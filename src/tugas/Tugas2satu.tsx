// TODO: 1. Buatlah sebuah string enum bernama 'PriorityLevel'
// dengan isi: LOW ('Low'), MEDIUM ('Medium'), HIGH ('Urgent')
const PriorityLevel = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'Urgent',
} as const;

type PriorityLevelType = typeof PriorityLevel[keyof typeof PriorityLevel];

interface Ticket {
  ticketId: string;
  title: string;
  priorityLevel: PriorityLevelType;
}

// TODO: 3. Lengkapi fungsi ini untuk menerima parameter bertipe 'Ticket'
// dan mengembalikan string keterangan berdasarkan prioritasnya
function getTicketMessage(ticket: Ticket): string {
  // Gunakan switch-case atau if-else untuk mengecek nilai enum
  if (ticket.priorityLevel === PriorityLevel.HIGH) {
    return "Segera tangani! Darurat!";
  } else if (ticket.priorityLevel === PriorityLevel.LOW || ticket.priorityLevel === PriorityLevel.MEDIUM) {
    return "Segera tangani!";
  }

  return '';
}

// Contoh pemanggilan (Opsional untuk dites)
const myTicket: Ticket = {
    ticketId: 'TICK-001',
    title: 'Server Down',
    priorityLevel: PriorityLevel.HIGH,
};

console.log(getTicketMessage(myTicket));

function Tugas2satu() {
  return (
    <div>Tugas2satu</div>
  )
}

export default Tugas2satu