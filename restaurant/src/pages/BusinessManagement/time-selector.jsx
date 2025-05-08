"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function TimeSelector({ label, defaultTime = "12:00 AM" }) {
  const [time, setTime] = useState(defaultTime);

  return (
    <div className="relative">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="flex items-center border rounded-md px-2 py-1">
        <Clock className="h-4 w-4 text-gray-400 mr-2" />
        <Input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border-0 p-0 h-6 focus-visible:ring-0"
        />
      </div>
    </div>
  );
}
