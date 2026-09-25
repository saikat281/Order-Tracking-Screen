"use client";

function Row({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between py-2.5">
      <span className="text-xs text-[#9C9C94]">{label}</span>
      <span className="text-sm font-medium text-[#14181F]">{value}</span>
    </div>
  );
}

export default function DeliveryInfo({ customer, eta, address, phone }) {
  return (
    <div className="rounded-2xl border border-[#E7E5E0] bg-white p-4">
      <p className="text-sm font-semibold text-[#14181F]">Delivery details</p>
      <div className="mt-1 divide-y divide-[#F0EFEA]">
        <Row label="Recipient" value={customer?.name} />
        <Row label="Address" value={address || "Not provided"} />
        <Row label="Phone" value={phone} />
        <Row label="Estimated arrival" value={eta} />
      </div>
    </div>
  );
}