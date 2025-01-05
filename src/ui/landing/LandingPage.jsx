import React, { useState } from 'react';
import {
  Badge,
  Flex,
  Box,
  Button,
  VStack,
  HStack,
  Input,
  Text,
  Spinner,
  Image,
  Card,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { Field } from '../../components/ui/field';
import { InputGroup } from '../../components/ui/input-group';
import { LuLink } from 'react-icons/lu';
import { FaPlus } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CiMusicNote1 } from 'react-icons/ci';
import { GiDuration } from 'react-icons/gi';
import { CiVideoOn } from 'react-icons/ci';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { Toaster, toaster } from '../../components/ui/toaster';
import { FaEye } from 'react-icons/fa';
import { Skeleton, SkeletonText } from '../../components/ui/skeleton';

const LandingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    unregister,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    downloadVideos(data);
  });

  const [inputs, setInputs] = useState([{ id: Date.now() }]);
  const [itemLoading, setItemLoading] = useState({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // Add a new input field
  const addInput = () => {
    if (inputs.length > 8) {
      toaster.create({
        title: 'Maximum 8 Video Links Reached',
        description: 'You can add only 8 video links at a time',
        type: 'warning',
      });
      return;
    }
    setInputs([...inputs, { id: Date.now() }]);
  };

  // Remove the input field by id
  const removeInput = (id, index) => {
    setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
    unregister(`links[${index}].link`);
  };

  const handleMobileDownload = async (videoUrl, filename) => {
    try {
      const response = await fetch(videoUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch the video.');
      }
      const totalSize = +response.headers.get('Content-Length'); // Get the total size of the file
      let loaded = 0; // Track the downloaded size
      filename = videoUrl.includes('mp4')
        ? `${filename}.mp4`
        : `${filename}.mp3`;
      // Create a readable stream to handle the video download
      const reader = response.body.getReader();
      const contentType = response.headers.get('Content-Type');
      const fileStream = streamSaver.createWriteStream(filename, {
        size: totalSize,
      });
      const writer = fileStream.getWriter();
      // Read the data in chunks and write it to the file stream
      const read = async () => {
        const { done, value } = await reader.read();
        if (done) {
          writer.close(); // Close the writer when the download is complete
          return;
        }
        // Write each chunk to the file stream
        writer.write(value);
        // Update the progress bar
        loaded += value.length;
        // Continue reading the next chunk
        read();
      };
      // Start reading the video data
      read();
    } catch (error) {
      console.error('Error during download:', error);
    }
  };

  const clearAll = () => {
    reset();
    setData([]);
    setItemLoading([]);
    setInputs([{ id: Date.now() }]);
  };

  const downloadVideos = async (data) => {
    // Loop over the links and make API calls
    setData([]);
    setLoading(true);
    let allLink = false;
    for (let index = 0; index < data.links.length; index++) {
      const item = data.links[index];
      if (!item.link.includes('tiktok.com')) {
        toaster.create({
          title: 'URL is invalid',
          description: 'Please try with a valid tiktok url',
          type: 'error',
        });
        setLoading(false);
        return;
      }
      // Set loading to true for the current link
      setItemLoading((prev) => ({ ...prev, [index]: true }));
      try {
        let allLinks = [];
        if (allLink) {
          allLinks = null;
        } else {
          allLinks = data.links;
        }
        const response = await axios.post(
          'https://tiktik.socialvideodownload.com/api/download',
          { allLinks: allLinks, url: item.link }
        );
        setData((prevData) => [...prevData, response.data]);
        // Set loading to false for the specific index once the API call is done
        setItemLoading((prev) => ({ ...prev, [index]: false }));
        allLink = true;
      } catch (error) {
        // Handle error if API call fails
        toaster.create({
          title: 'Download was not succeeded',
          description: 'Please refresh and try again!',
          type: 'error',
        });
        console.error(`Download failed for link ${item.link}:`, error);
        setLoading(false);
        setItemLoading([]);
        // Set loading to false for the specific index even if the API call fails
        setItemLoading((prev) => ({ ...prev, [index]: false }));
        allLink = false;
      }
    }
    setLoading(false);
    allLink = false;
  };
  return (
    <>
      <Box p={15} px={4} marginTop={10}>
        <Text textStyle="5xl" fontWeight="bold" textAlign="center">
          Download TikTok Videos Effortlessly, Save Moments Seamlessly
        </Text>
        <Text
          py={5}
          textStyle="xl"
          fontWeight="light"
          textAlign="center"
          color="gray.600"
          letterSpacing="wider"
        >
          Fast. Free. Multiple Downloads at Once – Your TikTok Saver!
        </Text>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={5} p={8} px={4}>
          {inputs.map((input, index) => (
            <Field
              invalid={!!errors?.links?.[index]?.link}
              errorText={errors?.links?.[index]?.link?.message}
              key={input.id}
            >
              {' '}
              <Flex width="100%" gap={3}>
                <InputGroup
                  flex="1"
                  startElement={<LuLink />}
                  endElement={
                    itemLoading[index] ? (
                      <Spinner size="sm" />
                    ) : index > 0 ? (
                      <FaRegWindowClose
                        color="#FB4141"
                        onClick={() => removeInput(input.id, index)}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : null
                  }
                >
                  <Input
                    placeholder="Paste your link"
                    {...register(`links[${index}].link`, {
                      required: 'Link is required',
                    })}
                  />
                </InputGroup>
              </Flex>
            </Field>
          ))}
          <Button variant="outline" fontWeight="bold" onClick={addInput}>
            <FaPlus /> Add Video
          </Button>
          <Button width="100%" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner size="sm" /> Downloading...
              </>
            ) : (
              <>
                <IoCloudDownloadOutline /> Download
              </>
            )}
          </Button>
          <Button type="button" bg="purple.800" width="100%" onClick={clearAll}>
            <MdOutlineCleaningServices /> Clear All
          </Button>
        </VStack>
      </form>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        p={{ base: 2, sm: 4 }}
        gap={5}
      >
        {inputs.map((input, index) =>
          itemLoading[index] ? (
            <Stack key={index}>
              <Skeleton height="250px" />
              <SkeletonText noOfLines={4} />
            </Stack>
          ) : (
            data[index] && (
              <Card.Root
                overflow="hidden"
                key={data[index].id}
                p={4}
                boxShadow="md"
              >
                <Image
                  objectFit="cover"
                  maxH="250px"
                  width="100%"
                  src={data[index]?.video?.origin_cover}
                  alt={data[index]?.title}
                />
                <Card.Body p={0}>
                  <Card.Title mb="3" mt="3">
                    {data[index]?.title}
                  </Card.Title>
                  <HStack align="start">
                    <Badge colorPalette="purple">
                      <FaEye />
                      {data[index]?.stats?.playCount}
                    </Badge>
                    <Badge colorPalette="green">
                      <GiDuration />
                      {data[index]?.video?.durationFormatted}
                    </Badge>
                    <Badge colorPalette="red">
                      <CiMusicNote1 />
                      {data[index]?.music?.title}
                    </Badge>
                  </HStack>
                </Card.Body>
                <Card.Footer mt={4} p={0}>
                  <Button
                    onClick={() => {
                      handleMobileDownload(
                        data[index]?.video?.noWatermark,
                        data[index]?.title
                      );
                    }}
                  >
                    <CiVideoOn />
                    Save Video
                  </Button>
                  <Button
                    bg="purple.800"
                    onClick={() => {
                      handleMobileDownload(
                        data[index]?.music?.play_url,
                        data[index]?.music?.title
                      );
                    }}
                  >
                    <CiMusicNote1 />
                    Save Audio
                  </Button>
                </Card.Footer>
              </Card.Root>
            )
          )
        )}
      </SimpleGrid>
      <Toaster />
    </>
  );
};

export default LandingPage;
