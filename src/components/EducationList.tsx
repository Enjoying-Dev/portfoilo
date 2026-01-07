import { motion } from "framer-motion";
import type { Education } from "../types/portfolio";

export const EducationList: React.FC<{ education?: Education[] }> = ({
  education = [],
}) => {
  const formatDate = (date: Education["date"]) => {
    if (!date) return "";
    if (typeof date === "string") return date;
    if (date.start && date.end) return `${date.start} - ${date.end}`;
    if (date.start && date.present) return `${date.start} - Present`;
    return date.start ?? "";
  };

  return (
    <div className="space-y-4">
      {education.map((edu, idx) => (
        <motion.div
          key={edu.id ?? idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          whileHover={{ y: -4 }}
          className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-shadow hover:shadow-md"
        >
          <div>
            <h3 className="font-semibold text-lg">
              {edu.degree}
              {edu.field && (
                <span className="text-gray-500 dark:text-gray-400">
                  {" "}
                  | {edu.field}
                </span>
              )}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
            {edu.summary && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {edu.summary}
              </p>
            )}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {formatDate(edu.date)}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationList;

