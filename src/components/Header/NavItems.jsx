'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ navItem = {} }) => {
  const pathname = usePathname();
  const { name, href, subNavItems } = navItem;
  const subHref = subNavItems?.map((item) => item.href);
  const current = pathname === href || subHref?.includes(pathname);
  return (
    <li className={`menu-item-has-children${current ? " current" : ""}`}>
      <Link href={href}>{name}</Link>
      <ul>
        {subNavItems.map((subItem) => (
          <li
            className={
              subItem?.subItems?.length ? "menu-item-has-children" : ""
            }
            key={subItem.id}
          >
            <Link href={subItem.href}>{subItem.name}</Link>
            <ul>
              {subItem?.subItems?.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavItems;
