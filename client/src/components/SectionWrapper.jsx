import { motion } from "framer-motion";

const sectionAnimation = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function SectionWrapper({ id, eyebrow, title, subtitle, children, className = "" }) {
    return (
        <section id={id} className={`section-shell ${className}`}>
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                {(eyebrow || title || subtitle) && (
                    <motion.div
                        variants={sectionAnimation}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                        className="mx-auto mb-10 max-w-3xl text-center"
                    >
                        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
                        {title ? <h2 className="section-title">{title}</h2> : null}
                        {subtitle ? <p className="section-subtitle mt-4">{subtitle}</p> : null}
                    </motion.div>
                )}

                {children}
            </div>
        </section>
    );
}

export default SectionWrapper;
