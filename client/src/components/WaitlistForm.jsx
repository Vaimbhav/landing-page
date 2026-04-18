import { LoaderCircle } from "lucide-react";
import { useWaitlist } from "../hooks/useWaitlist";

function WaitlistForm({ className = "" }) {
    const {
        form,
        setField,
        isFormValid,
        isDuplicateLocal,
        isSubmitting,
        feedback,
        submit,
    } = useWaitlist();

    const buttonDisabled = isSubmitting || !isFormValid || isDuplicateLocal;

    return (
        <form onSubmit={submit} className={`w-full ${className}`} id="waitlist" noValidate>
            <div className="glass-panel grid gap-3 rounded-2xl p-4 sm:grid-cols-2 sm:p-5">
                <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-sm font-medium text-slate-100">
                        Name
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={(event) => setField("fullName", event.target.value)}
                        placeholder="Your full name"
                        autoComplete="name"
                        className="h-12 w-full rounded-xl border border-white/18 bg-white/96 px-4 text-[0.98rem] text-slate-900 outline-none transition focus:border-slate-300"
                        required
                    />
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="whatsappNumber" className="text-sm font-medium text-slate-100">
                        WhatsApp Number
                    </label>
                    <input
                        id="whatsappNumber"
                        type="tel"
                        value={form.whatsappNumber}
                        onChange={(event) => setField("whatsappNumber", event.target.value)}
                        placeholder="+91XXXXXXXXXX"
                        autoComplete="tel"
                        className="h-12 w-full rounded-xl border border-white/18 bg-white/96 px-4 text-[0.98rem] text-slate-900 outline-none transition focus:border-slate-300"
                        required
                    />
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-100">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(event) => setField("email", event.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="h-12 w-full rounded-xl border border-white/18 bg-white/96 px-4 text-[0.98rem] text-slate-900 outline-none transition focus:border-slate-300"
                        required
                    />
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="role" className="text-sm font-medium text-slate-100">
                        Role
                    </label>
                    <select
                        id="role"
                        value={form.role}
                        onChange={(event) => setField("role", event.target.value)}
                        className="h-12 w-full rounded-xl border border-white/18 bg-white/96 px-4 text-[0.98rem] text-slate-900 outline-none transition focus:border-slate-300"
                    >
                        <option value="MEMBER">Member</option>
                        <option value="GUIDE">Guide</option>
                        <option value="HOMESTAY_OWNER">Homestay Owner</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
                    disabled={buttonDisabled}
                >
                    {isSubmitting ? (
                        <>
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>Submit Registration</>
                    )}
                </button>
            </div>

            {feedback.message ? (
                <p
                    className={`mt-3 text-sm font-medium ${feedback.type === "error" ? "text-red-300" : "text-emerald-300"
                        }`}
                >
                    {feedback.message}
                </p>
            ) : null}
        </form>
    );
}

export default WaitlistForm;
