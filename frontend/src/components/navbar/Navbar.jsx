import { useState } from "react";
import { Menu, MenuItem} from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar className="flex justify-between items-center">
        {/* Left Side: Logo Placeholder */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-900">Hortalizas Real del Sol</span>
        </div>

        {/* Center Menu (Links) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Button sx={{ color: 'black', textTransform: 'none' }}>Empresa</Button>
          <Button sx={{ color: 'black', textTransform: 'none' }}>Productos</Button>
        </div>

        {/* Right Side: Start for free */}
        <div className="hidden md:flex space-x-4 items-center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'green',
              color: 'white',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'darkgreen',
              },
            }}
          >
            Contactenos
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IconButton onClick={handleMenuToggle}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-700" />
            )}
          </IconButton>
        </div>
      </Toolbar>

      {/* Mobile Menu */}
      {isOpen && (
        <Menu as="div" className="md:hidden bg-white">
          <MenuItem>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'none',
                color: 'black',
                borderColor: 'black',
                width: '100%',
                '&:hover': {
                  borderColor: 'black',
                },
              }}
            >
              Empresa
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              variant="outlined"
              sx={{
                textTransform: 'none',
                color: 'black',
                borderColor: 'black',
                width: '100%',
                '&:hover': {
                  borderColor: 'black',
                },
              }}
            >
              Productos
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'green',
                color: 'white',
                textTransform: 'none',
                width: '100%',
                '&:hover': {
                  backgroundColor: 'darkgreen',
                },
              }}
            >
              Contactenos
            </Button>
          </MenuItem>
        </Menu>
      )}
    </AppBar>
  );
};

export default Navbar;
