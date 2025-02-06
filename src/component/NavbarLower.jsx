import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const MenuItems = [
    {
        name: "Home", link: "/"
    },
    {
        name: "Food", link: "/foods"
    },
    {
        name: "Top Rated", link: "/foods"
    },
    {
        name: "Best seller", link: "/foods"
    }
]

const DropdownLinks = [
    {
        id: 1,
        name: "Trending products",
        link: "/"
    },
    {
        id: 2,
        name: "Best selling",
        link: "/"
    },
    {
        id: 3,
        name: "Top rated",
        link: "/"
    },
]
const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const NavbarLower = () => {
    return (
        <motion.div
            className="flex justify-center bg-black  shadow-md"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
        >
            <ul className="sm:flex hidden items-center gap-6 py-1">
                {MenuItems.map((item, index) => (
                    <motion.li
                        key={index}
                        whileHover={{ scale: 1.1, color: "#e91e63" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <a className="inline-block px-4 duration-200" href={item.link}>
                            {item.name}
                        </a>
                    </motion.li>
                ))}

                {/* Dropdown Menu */}
                <motion.li className="relative group cursor-pointer">
                    <motion.a
                        href="#"
                        className="flex items-center gap-1 py-2"
                        whileHover={{ scale: 1.1, color: "#e91e63" }}
                    >
                        Trending
                        <motion.span
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ExpandMoreIcon />
                        </motion.span>
                    </motion.a>

                    {/* Dropdown Content */}
                    <motion.div
                        className="absolute z-[9999] hidden group-hover:block w-[160px] rounded-md bg-white p-2 text-black shadow-lg"
                        initial="hidden"
                        animate="visible"
                        variants={dropdownVariants}
                    >
                        <ul>
                            {DropdownLinks.map((item) => (
                                <motion.li
                                    key={item.id}
                                    whileHover={{ backgroundColor: "#fce4ec" }}
                                    className="rounded-md p-2 cursor-pointer"
                                >
                                    <a href={item.link} className="block w-full">
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.li>
            </ul>
        </motion.div>
    );
};

export default NavbarLower;
