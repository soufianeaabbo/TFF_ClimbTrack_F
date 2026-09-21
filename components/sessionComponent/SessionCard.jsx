"use client";

import { useState } from "react";
import SessionDetailsModal from "./SessionDetailsModal";

export default function SessionCard({ session }) {

    // Permet de savoir si la modal est ouverte ou fermée
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-50 text-blue-600 px-5 py-3 rounded-lg font-medium hover:bg-blue-100 cursor-pointer"
            >
                Voir les détails
            </button>

            {/* La modal apparaît seulement si modalOpen vaut true */}
            {modalOpen && (
                <SessionDetailsModal
                    session={session}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </>
    );
}