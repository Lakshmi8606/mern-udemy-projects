import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  IconButton,
  Text,
  Image,
  HStack,
  useColorModeValue,
  useToast,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  useDisclosure,
  Input,
  ModalContent,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/productStore";

const ProductCard = ({ product }) => {
  // local editable copy of product
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  // keep local state in sync when product prop changes or modal is opened
  useEffect(() => {
    if (product) {
      setUpdatedProduct({
        // copy all fields so we don't accidentally share references
        ...product,
        // ensure price is string for the input
        price: product.price !== undefined ? String(product.price) : "",
      });
    }
  }, [product]);

  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen: onOpenBase, onClose } = useDisclosure();

  // Ensure modal opens with the latest product values
  const onOpen = () => {
    if (product) {
      setUpdatedProduct({
        ...product,
        price: product.price !== undefined ? String(product.price) : "",
      });
    }
    onOpenBase();
  };

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUpdate = async () => {
    // basic validation
    if (!updatedProduct.name || updatedProduct.price === "") {
      toast({
        title: "Validation error",
        description: "Name and price are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const pid = updatedProduct._id || updatedProduct.id;
    if (!pid) {
      toast({
        title: "Error",
        description: "Product id missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // convert price to number before sending
    const payload = {
      name: updatedProduct.name,
      price: Number(updatedProduct.price),
      image: updatedProduct.image,
    };

    const { success, message } = await updateProduct(pid, payload);

    toast({
      title: success ? "Updated" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });

    if (success) {
      onClose();
    }
  };
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    onClose();
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: "Product Updated Successfully ",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  // Controlled inputs: important to use prev state when updating
  return (
    <Box
      bg={bg}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton
            aria-label="Edit Product"
            icon={<EditIcon />}
            onClick={onOpen}
            colorScheme="blue"
          />
          <IconButton
            aria-label="Delete Product"
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name ?? ""}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={updatedProduct.price ?? ""}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image ?? ""}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    image: e.target.value,
                  })
                }
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
